import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import icSmartphone from '@iconify/icons-ic/twotone-smartphone';
import { ApiProvider } from 'src/app/services/api-provider';


@Component({
  selector: 'vex-onepass-profile',
  templateUrl: './onepass-profile.component.html',
  styleUrls: ['./onepass-profile.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})


export class OnepassProfileComponent implements OnInit {

  icSmartphone = icSmartphone;
    public onepassProfileFrom: any;
    submitted = false;


 constructor(
   private router: Router,
   private formBuilder: FormBuilder,
   private apiProvider: ApiProvider,
   ) {}

 ngOnInit() {
	 
	this.onepassProfileFrom = this.formBuilder.group({
	      product: [null, Validators.compose([Validators.required])],
	      registrationKey: [null, Validators.compose([Validators.required])],
	  	  customLabel: [null, Validators.compose([Validators.required])],
		    email: [null, Validators.compose([Validators.required])],
    });
  }

 public hasError = (controlName: string, errorName: string) => {
    return this.onepassProfileFrom.controls[controlName].hasError(errorName);
  }
  createOnePassProfile(){
  //   this.submitted = true;
  //   if (this.onepassProfile.invalid) {
  //     return;
  //   }
  //   alert('form fields are validated successfully!');  
  // }
  const inputData = {
    product: this.onepassProfileFrom.value.product,
    registrationKey: this.onepassProfileFrom.value.registrationKey,
    customLabel: this.onepassProfileFrom.value.customLabel,
    email: this.onepassProfileFrom.value.email
  }
  console.log({inputData})

  this.apiProvider.createOnePass('onePassCreate',inputData).subscribe(
    async resdata => {
              const res = resdata;
              if(res){
                //show some message
                this.router.navigate(['/dashboard'])
              }
      }, async (error) => {
        console.log("error occured")
        this.router.navigate(['/dashboard'])
      });
    }
}
