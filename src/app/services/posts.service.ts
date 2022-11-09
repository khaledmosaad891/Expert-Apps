import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Posts } from '../interfaces/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  Posts: Posts[] = [];
  dataSource:any;
  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Posts> {
    return this.http.get(`${environment.baseUrl}posts`);
  }


  getPostById(id: number): Observable<Posts> {
    return this.http.get(`${environment.baseUrl}posts/${id}`);
  }

  addPost(postObj: Posts): Observable<Posts> {
    return this.http.post(`${environment.baseUrl}posts`, postObj);
  }

  editPost(id: number, postObj: Posts): Observable<Posts> {
    return this.http.put(`${environment.baseUrl}posts/${id}`, postObj);
  }

  deletePostById(id: number): Observable<Posts> {
    return this.http.delete(`${environment.baseUrl}posts/${id}`);
  }
}
