import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PopoverService } from '../popover/popover.service';
import { ToolbarNotificationsDropdownComponent } from './toolbar-notifications-dropdown/toolbar-notifications-dropdown.component';
import icNotificationsActive from '@iconify/icons-ic/twotone-notifications-active';
import { ApiProvider } from 'src/app/services/api-provider';
import { LocalStorageService } from 'ngx-webstorage';
import { NotificationMessageService } from 'src/app/services/NotificationMessage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'vex-toolbar-notifications',
  templateUrl: './toolbar-notifications.component.html',
  styleUrls: ['./toolbar-notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarNotificationsComponent implements OnInit {

  @ViewChild('originRef', { static: true, read: ElementRef }) originRef: ElementRef;

  dropdownOpen: boolean;
  icNotificationsActive = icNotificationsActive;
  userdetails: any;
  notificationsCount = 0;
  notify = false;
  _notifySubs: Subscription;

  constructor(
    private popover: PopoverService,
    private cd: ChangeDetectorRef,
    private storage: LocalStorageService,
    private apiProvider: ApiProvider,
    private notificationMessageService: NotificationMessageService) {
    this._notifySubs = this.notificationMessageService.changesubj.subscribe(
      result => {
        this.notify = true;
        this.userdetails = this.storage.retrieve('userDetails');
        if (this.storage.retrieve('ROLE') == 'CUSTOMER') {
          this.getUserNotifications(this.userdetails.id);
        }
      });

    if (!this.notify) {

      this.userdetails = this.storage.retrieve('userDetails');
      if (this.storage.retrieve('ROLE') == 'CUSTOMER') {
        this.getUserNotifications(this.userdetails.id);
      }
    }
  }

  ngOnInit() { }

  showPopover() {
    this.dropdownOpen = true;
    this.cd.markForCheck();

    const popoverRef = this.popover.open({
      content: ToolbarNotificationsDropdownComponent,
      origin: this.originRef,
      offsetY: 12,
      position: [
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom'
        },
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
      ]
    });

    popoverRef.afterClosed$.subscribe(() => {
      this.dropdownOpen = false;
      this.cd.markForCheck();
    });
  }
  getLocalDate(utc_date) {
    return new Date(utc_date);
  }
  getUserNotifications(suserid) {

    const payload: any = {
      userid: suserid
    };

    this.apiProvider.post('wallet/notifications', payload).subscribe(
      async resdata => {
        this.notificationsCount = resdata.result.length;
        this.cd.detectChanges();
      }, async (error) => {

      });


  }

}
