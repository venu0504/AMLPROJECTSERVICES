import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import icMail from '@iconify/icons-ic/twotone-mail';
import { ApiProvider } from 'src/app/services/api-provider';


@Component({
  selector: 'vex-forgot-username',
  templateUrl: './forgot-username.component.html',
  styleUrls: ['./forgot-username.component.scss'],
  animations: [fadeInUp400ms]
})
export class ForgotUsernameComponent implements OnInit {


  icMail = icMail;
  public forgotUsernameform: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiProvider: ApiProvider,

  ) { }

  ngOnInit() {
    this.forgotUsernameform = this.formBuilder.group({
      email: [null, Validators.required]
    })
  }

  sendForgetUsernameLink() {
    const inputData = {
      email: this.forgotUsernameform.value.email
    }
   this.apiProvider.sendUsernameLink('sendUsername',inputData).subscribe(
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
