import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationMessageService {

  changesubj = new Subject<any>();

  changesubj$ = this.changesubj.asObservable();

  setMessage(changes: any): any {
    this.changesubj.next(changes);
  }

}
