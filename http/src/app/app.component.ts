import {Component, OnInit} from '@angular/core';
// import HttpClient
import {HttpClient} from '@angular/common/http';
// the map operator allow us to get some data and return new data.
import {map} from 'rxjs/operators'

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
    this.fetchPost();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request. posts.json is firebase option not angular
    this.http.post('https://ng-complete-guide-f6ee1-default-rtdb.firebaseio.com/posts.json', postData).subscribe(responseData => {
      console.log(responseData)
    })
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPost();
  }

  onClearPosts() {
    // Send Http request
  }

  // fetch data from database.
  private fetchPost() {
    this.http.get('https://ng-complete-guide-f6ee1-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postsArray = [];
        for (const key in responseData) {
          if(responseData.hasOwnProperty(key)){
            postsArray.push({...responseData[key], id: key})
          }
        }
        return postsArray;
      }))
      .subscribe(posts => {
        console.log(posts);
      })
  }

}
