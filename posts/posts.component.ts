import {map} from 'rxjs/operator/map';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response.json();
    },
    error => {
      alert('An unexpected error occured.');
      console.log(error);
    });
  }

  createPost(input: HTMLInputElement): void {
    const post = { title : input.value };
    input.value = '';
    this.service.createPost(post)
    .subscribe(response => {
      this.posts.splice(0, 0, post);
      post['id'] = response.json().id;
    },
    (error: Response) => {
      if (error.status === 400) {
        alert(error.json());
        console.log(error);
      } else {
        console.log(error);
      }
    });
  }

  updatePost(post: any): void {
    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response.json());
    },
    error => {
      console.log(error);
    });
  }

  deletePost(post: any): void {
    this.service.deletePost(1234)
    .subscribe(response => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      console.log(response.json());
    },
    (error: Response) => {
      if (error.status === 404) {
        alert(' this post is already deleted');
      } else {
        console.log(error);
      }
    });
  }

}
