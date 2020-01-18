import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import icSmartphone from '@iconify/icons-ic/twotone-smartphone';

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
    public onepassProfile: any;
    submitted = false;


 constructor(private router: Router, private formBuilder: FormBuilder) {}

 ngOnInit() {
	 
	this.onepassProfile = this.formBuilder.group({
	  product: [null, Validators.compose([Validators.required])],
	  registrationKey: [null, Validators.compose([Validators.required])],
	  	  customLabel: [null, Validators.compose([Validators.required])],
		    email: [null, Validators.compose([Validators.required])],
		  
	  
	   
	   
	 
    });
  }

 public hasError = (controlName: string, errorName: string) => {
    return this.onepassProfile.controls[controlName].hasError(errorName);
  }
  onepassProfileOnsubmit(){
    this.submitted = true;
    if (this.onepassProfile.invalid) {
      return;
    }
    alert('form fields are validated successfully!');  
  }

}
