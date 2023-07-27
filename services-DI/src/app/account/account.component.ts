import {Component, Input} from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService] // in here we inform to angular how to create this service
})

export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;


  // we use the constructor for use the service
  constructor(private loggingService: LoggingService, private accountService: AccountsService) {
  }


  onSetTo(status: string) {
    // console.log('A server status changed, new status: ' + status);

    // use logging service here
    this.loggingService.logStatusChange(status)

    // use account service here
    this.accountService.updateStatus(this.id, status)
  }
}
