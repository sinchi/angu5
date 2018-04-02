import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }

  getPosts(): Observable<any> {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post) {
    return this.http.patch(`${this.url}/${post.id}`, JSON.stringify({ isRead: true }), post.id);
  }

  deletePost(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
