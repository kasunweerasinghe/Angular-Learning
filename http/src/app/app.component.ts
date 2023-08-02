import {Component, OnInit} from '@angular/core';
// import HttpClient
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  // after import HttpClientModule in module.ts HttpClient need to inject.
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request. posts.json is firebase option not angular
    this.http.post('https://ng-complete-guide-f6ee1-default-rtdb.firebaseio.com/posts.json', postData).subscribe(responseData => {
      console.log(responseData)
    })
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}
