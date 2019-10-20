import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { environment } from 'src/environments/environment';

@Component({
  selector: "wf-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.sass"]
})
export class PostDetailComponent implements OnInit {
  mapUrl = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/";

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  post: Post;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params["id"];

      return this.postService
        .getPost(Number(id))
        .subscribe((response: Post) => {
          this.post = response;
        });
    });
  }

  getMapUrl(longitude: string, latitude: string): string {
    return (
      this.mapUrl +
      latitude +
      "," +
      longitude +
      ",9.67,0.00,0.00/300x300@2x?access_token=" +  environment.mapKey
    );
  }

  editPost(postId: number): void{
    this.router.navigate(["/posts/edit", postId]);
  }
}
