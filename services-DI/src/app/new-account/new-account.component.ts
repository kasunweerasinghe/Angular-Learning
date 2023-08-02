import {Component} from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountsService} from "../accounts.service";


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // also comment this if using Injectable()
  providers: [LoggingService] // in here we inform to angular how to create this service
})
export class NewAccountComponent {


  // Or We can use DI injection using inject() function:
  // we use the constructor for use the service
  constructor(private loggingService: LoggingService, private accountService: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    // console.log('A server status changed, new status: ' + accountStatus);

    // use logging service here
    this.loggingService.logStatusChange(accountStatus);

    // after uncomment app.module.ts provider[] we can uncomment this too because we inject this as a service in app.module.ts
    // this.loggingService.logStatusChange(accountStatus);

    // use account service here
    this.accountService.addAccount(accountName, accountStatus)
  }
}
