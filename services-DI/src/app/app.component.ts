import {Component, OnInit} from '@angular/core';
import {AccountsService} from "./accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})

export class AppComponent implements OnInit {
  accounts: { name: string, status: string }[] = [];

  // we use the constructor for use the service
  constructor(private accountService: AccountsService) {
  }

  ngOnInit() {

    // use account service here
    this.accounts = this.accountService.accounts;

  }

}
