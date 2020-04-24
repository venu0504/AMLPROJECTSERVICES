import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import icSmartphone from '@iconify/icons-ic/twotone-smartphone';
import { ApiProvider } from 'src/app/services/api-provider';
import { LocalStorageService } from 'ngx-webstorage';
import { ToastrService } from 'ngx-toastr';
import { LoginMessageService } from 'src/app/services/LoginMessage.service';
import { NotificationMessageService } from 'src/app/services/NotificationMessage.service';

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})
export class LoginComponent implements OnInit {

  icSmartphone = icSmartphone;
    public onLoginForm: any;
    submitted = false;


  countries: Array<any>;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiProvider: ApiProvider,
    private storage: LocalStorageService,
    private toastr: ToastrService,
    private loginMessageService: LoginMessageService,
    private notificationMessageService: NotificationMessageService

  ) { }

ngOnInit() {
this.onLoginForm = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required])],
 
      password: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])]
 });
  }

 public hasError = (controlName: string, errorName: string) => {
    return this.onLoginForm.controls[controlName].hasError(errorName);
  }


  async getCountry() {

    this.apiProvider.getWithoutAuth('configurations/country').subscribe(
      async resdata => {
        this.countries = resdata.result;
      }, async (error) => {

      });

  }
  async goToHome() {
  const inputdata = {
      username: this.onLoginForm.value.username,
      password: this.onLoginForm.value.password,
      grant_type: 'password'
    };
    this.apiProvider.login('oauth/token', inputdata).subscribe(
           async resdata => {
        const res = resdata;
        if (resdata) {
          this.storage.store('access_token', res.access_token);
         this.apiProvider.get('user/findbyUsername/' + this.onLoginForm.value.username ).subscribe(
            async userdata => {
              if (userdata.result) {
                this.storage.store('loginuserid', userdata.result.id);
                this.storage.store('userDetails', userdata.result);
                 const rolename = userdata.result.role[0];
                console.log(rolename);
                this.storage.store('ROLE', rolename);
                this.loginMessageService.setMessage(true);
                this.toastr.success('Welcome Back');
                this.router.navigate(['/dashboards/analytics']);

              } else {
                this.toastr.warning('Please enter a valid user name and password');
              }
            }, async (error) => {
              this.toastr.error('Some thing went wrong please try after sometime or contact admin');

            });


        } else {
          this.toastr.warning('Please Enter a valid user name and password.');
        }

      }, async (error) => {
        // this.toastr.error('Some thing went wrong please try after sometime or contact admin');
        this.router.navigate(['/screening/components/overview'])
      });



  }
}
