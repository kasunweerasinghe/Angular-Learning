import {Component, OnDestroy, OnInit} from '@angular/core';

// we need to import this when we create custom Observable
import {interval, Subscription, Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() {
  }


  /*
  create new Observables. Observables are not feature from javascript or typescript.
  it's added by a package named rxjs
  */

  ngOnInit() {
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);//  emit new value.  observer.error() can use for throw error
        if (count == 2) { // count == 5 in that case   console.log('Completed!') will not print. because errors cancel the observable
          observer.complete(); // if we use complete() there are no other values emitted thereafter
        }
        if (count > 3) {
          // if  observer.error() catch any errors it will stop the process.
          observer.error(new Error('Count is Greater 3!'))
        }
        count++;
      }, 1000)
    })

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data)
      //   error handle function
    }, error => {
      console.log(error)
      alert(error.message)
      //   completion handler function
    }, () => {
      console.log('Completed!')
    });
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }


}
