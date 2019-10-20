import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from 'rxjs';
import { Post } from "../../models/post";
import { PostService } from "../../services/post.service";
import { AlertService } from '../../services/alert.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: "wf-post-update",
  templateUrl: "./post-update.component.html",
  styleUrls: ["./post-update.component.sass"]
})
export class PostUpdateComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  isCreate = true;
  originalPost: Post;
  mapUrl = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/";

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ["", Validators.required],
      content: ["", Validators.required],
      lat: ["", Validators.pattern(/^-?[0-9]\d*(\.\d+)?$/)],
      long: ["", Validators.pattern(/^-?[0-9]\d*(\.\d+)?$/)],
      image_url: [""]
    });

    this.route.params.subscribe(params => {
      const id = params["id"];
      if (id) {
        this.isCreate = false;
        return this.postService.getPost(Number(id)).subscribe(
          (response: Post) => {
            this.originalPost = Object.assign({}, response);
            delete response.id;
            delete response.created_at;
            delete response.updated_at;
            this.registerForm.setValue(response);
          },
          error => {
            this.alertService.showAlert("error", "Error getting post data!");
          }
        );
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      let obs: Observable<Post>;
      let successMessage = "";
      let errorMessage = "";
      if (!this.isCreate) {
        obs = this.updatePost(this.originalPost.id, this.registerForm.value);
        successMessage = "Post updated successfully!";
        errorMessage = "Error updating post!";
      } else {
        obs = this.createPost(this.registerForm.value);
        successMessage = "Post created successfully!";
        errorMessage = "Error creating post!";
      }
      obs.subscribe(
        response => {
          this.alertService.showAlert("success", successMessage);
          this.router.navigate(["/posts"]);
        },
        error => {
          this.alertService.showAlert("error", errorMessage);
        }
      );
    }
  }

  createPost(post: Post): Observable<Post> {
    return this.postService.createPost(post);
  }

  updatePost(id: number, post: Post): Observable<Post> {
    post.id = id;
    return this.postService.updatePost(id, post);
  }

  getMapUrl(longitude: number, latitude: number): string {
    return (
      this.mapUrl +
      latitude +
      "," +
      longitude +
      ",9.67,0.00,0.00/300x300@2x?access_token=" +
      environment.mapKey
    );
  }
  back(): void {
    this.router.navigate(["/posts/detail", this.originalPost.id]);
  }
}
