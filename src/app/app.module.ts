import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ToastrModule } from 'ngx-toastr';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ApiProvider } from './services/api-provider';
import { HttpModule } from '@angular/http';

import { MatDialogModule, MatButtonModule } from '@angular/material';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { LoginMessageService } from './services/LoginMessage.service';
import { NotificationMessageService } from './services/NotificationMessage.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    MatDialogModule,
    MatButtonModule,
    NgxWebstorageModule.forRoot(),
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

    // Vex
    VexModule
  ],
  entryComponents: [
  
  ],
  providers: [ApiProvider, HttpInterceptorService,
    LoginMessageService, NotificationMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
