import {Component, EventEmitter, Output} from '@angular/core';
import {LoggingService} from "../logging.service";


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService] // in here we inform to angular how to create this service
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  // Or We can use DI injection using inject() function:
  // we use the constructor for use the service
  constructor(private loggingService: LoggingService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    // use service here
    this.loggingService.logStatusChange(accountStatus);

    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
