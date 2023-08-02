import {Component, OnInit} from '@angular/core';
// import HttpClient
import {HttpClient} from '@angular/common/http';
// the map operator allow us to get some data and return new data.
import {map} from 'rxjs/operators'
import {Post} from "./post.model";
import {PostsService} from "./posts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  // after import HttpClientModule in module.ts HttpClient need to inject.
  constructor(private http: HttpClient, private postService: PostsService) {
  }

  ngOnInit() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    })
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content)
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    })
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    })
  }


}
