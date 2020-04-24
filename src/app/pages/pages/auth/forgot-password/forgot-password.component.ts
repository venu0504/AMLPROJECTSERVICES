import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import icMail from '@iconify/icons-ic/twotone-mail';
import icSmartphone from '@iconify/icons-ic/twotone-smartphone';
import { FormControl } from '@angular/forms';
import { ApiProvider } from 'src/app/services/api-provider';

@Component({
  selector: 'vex-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUp400ms]
})
export class ForgotPasswordComponent implements OnInit {


    public forgotPasswordForm: any;
    submitted = false;
    icMail = icMail;

 constructor(
   private router: Router, 
   private formBuilder: FormBuilder,
   private apiProvider: ApiProvider,
   ) {}

ngOnInit() {
this.forgotPasswordForm = this.formBuilder.group({
 
      email: [null, Validators.compose([Validators.required, Validators.email])]
 });
  }


 public hasError = (controlName: string, errorName: string) => {
    return this.forgotPasswordForm.controls[controlName].hasError(errorName);
  }

  sendforgotPasswordLink(){
    const inputData = {
      email: this.forgotPasswordForm.value.email
    }
   this.apiProvider.sendPasswordLink('sendPassword',inputData).subscribe(
    async resdata => {
              const res = resdata;
              if(res){
                //show some message
                this.router.navigate(['/login'])
              }
      }, async (error) => {
        console.log("error occured")
      });
    }
}
