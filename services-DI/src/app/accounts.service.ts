import {LoggingService} from "./logging.service";
import {Injectable} from "@angular/core";

// this tell angular that now this service is injectable. uncomment this after uncomment app.module.ts provider[] uncomment.
// @Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];


  // constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});

    // this.loggingService.logStatusChange(status);

  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;

    // this.loggingService.logStatusChange(status);
  }

}
