import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class PostService {

  postUrl = environment.apiUrl + "posts";

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

  getPost(postId: number): Observable<Post> {
    return this.http.get<Post>(this.postUrl + '/' + postId);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postUrl, post);
  }

  updatePost(postId: number, newValue): Observable<Post> {
    return this.http.put<Post>(this.postUrl + '/' + postId, newValue);
  }

  deletePost(postId: number) {
    return this.http.delete( this.postUrl + '/' + postId);
  }

}
