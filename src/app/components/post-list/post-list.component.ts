import { Component, OnInit } from "@angular/core";
import { PostService } from "../../services/post.service";
import { Post } from "../../models/post";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { DatePipe } from "@angular/common";
import { ConfirmationModalService } from "../../services/confirmation-modal.service";
import { AlertService } from '../../services/alert.service';

@Component({
  selector: "wf-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.sass"]
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;
  tableHeader: any[] = [
    { label: "#", selector: "id" },
    { label: "title", selector: "title" },
    { label: "content", selector: "content" },
    { label: "geopositon", selector: "geoposition" },
    { label: "Create date", selector: "created_at" },
    { label: "update date", selector: "updated_at" }
  ];
  rows: Post[];

  postToDeleteIndex: number;

  constructor(
    public postService: PostService,
    public router: Router,
    private datePipe: DatePipe,
    public confirmationModalService: ConfirmationModalService,
    private alertService: AlertService
  ) {
    postService.getPosts().subscribe(response => {
      this.rows = this.transformDataToTable(response);
    });
  }

  ngOnInit() {}

  goToCreatePostView(): void {
    this.router.navigate(["/posts/new"]);
  }

  transformDate(date: string): string {
    return this.datePipe.transform(date, "dd/MM/yyyy");
  }

  transformDataToTable(posts: Post[]): any {
    let response = [];
    for (const i in posts) {
      const post = posts[i];
      const geoposition = post.long ? post.long + "," + post.lat : "";
      const row = {
        id: post.id,
        title: post.title,
        content:
          post.content.slice(0, 200) + (post.content.length > 200 ? "..." : ""),
        geoposition: geoposition,
        created_at: this.transformDate(post.created_at),
        updated_at: this.transformDate(post.updated_at)
      };
      response.push(row);
    }
    return response;
  }

  deletePost(postIndex: number): void {
    this.postToDeleteIndex = postIndex;
    this.confirmationModalService.showModal();
  }

  confirmDeletePost(): void {
    this.postService
      .deletePost(this.rows[this.postToDeleteIndex].id)
      .subscribe(response => {
        this.alertService.showAlert('success', 'Post deleted successfully');
        this.rows.splice(this.postToDeleteIndex, 1);
        this.confirmationModalService.hideModal();
      },
      (error) =>{
        this.alertService.showAlert('error', 'Error deleting post: ' + error);
      });
  }

  goToDetail(id: number): void {
    this.router.navigate(["/posts/detail", id]);
  }
}
