import {map} from 'rxjs/operator/map';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll()
    .subscribe(posts =>  this.posts = posts);
  }

  createPost(input: HTMLInputElement): void {
    const post = { title : input.value };
    this.posts.splice(0, 0, post);
    input.value = '';
    this.service.create(post)
    .subscribe(serverPost => {
      post['id'] = serverPost.id;
    },
    (error: AppError) => {
      this.posts.splice(0, 1);

      if (error instanceof BadInput) {
        // this.form.setErrors(error.originalError);
      } else {
        throw error;
      }
    });
  }

  updatePost(post: any): void {
    this.service.update(post)
    .subscribe(serverPost => {
      console.log(serverPost);
    });
  }

  deletePost(post: any): void {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(1234)
    .subscribe(serverPost => {

      console.log(serverPost);
    },
    (error: AppError) => {
      this.posts.splice(index, 0, post);

      if (error instanceof NotFoundError) {
        alert(' this post is already deleted');
      } else {
        throw error;
      }
    });
  }

}
