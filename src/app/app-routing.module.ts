import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostListComponent } from './components/post-list/post-list.component';
import { PostUpdateComponent } from "./components/post-update/post-updatecomponent";
import { PostDetailComponent } from './components/post-detail/post-detail.component';


const routes: Routes = [
  {
    path: "",
    component: PostListComponent
  },
  {
    path: "posts",
    component: PostListComponent
  },
  {
    path: "posts/edit/:id",
    component: PostUpdateComponent
  },
  {
    path: "posts/new",
    component: PostUpdateComponent
  },
  {
    path: "posts/detail/:id",
    component: PostDetailComponent
  },
  {
    path: "**",
    redirectTo: "posts"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
