import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
  }


  /*
   params is Observable. so we don't need to import rxjs. And here we don't need to implement OnDestroy and destroy
   the observable. angular do that for us. because all these observable manage by angular.
   */
  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
}
