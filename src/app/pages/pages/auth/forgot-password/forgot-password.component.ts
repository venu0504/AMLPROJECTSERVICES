import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import icMail from '@iconify/icons-ic/twotone-mail';
import icSmartphone from '@iconify/icons-ic/twotone-smartphone';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'vex-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUp400ms]
})
export class ForgotPasswordComponent implements OnInit {


    public forgotPassword: any;
    submitted = false;


 constructor(private router: Router, private formBuilder: FormBuilder) {}

ngOnInit() {
this.forgotPassword = this.formBuilder.group({
 
      email: [null, Validators.compose([Validators.required, Validators.email])]
 });
  }


 public hasError = (controlName: string, errorName: string) => {
    return this.forgotPassword.controls[controlName].hasError(errorName);
  }
  forgotPasswordOnsubmit(){
    this.submitted = true;
    if (this.forgotPassword.invalid) {
      return;
    }
    alert('form fields are validated successfully!');  
  }
}
