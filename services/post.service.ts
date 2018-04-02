import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

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
    return this.http.delete(`${this.url}/${id}`)
    .catch((error: Response) => {
      if (error.status === 404) {
        return Observable.throw(new NotFoundError());
      }
      return Observable.throw(new AppError(error));
    });
  }

}
