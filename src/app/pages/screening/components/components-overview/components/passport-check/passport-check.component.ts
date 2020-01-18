import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';


import icClose from '@iconify/icons-ic/twotone-close';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-passport-check',
  templateUrl: './passport-check.component.html',
  styleUrls: ['./passport-check.component.scss']
})
export class PassportcheckComponent implements OnInit {

  progressHTML =
    `<mat-progress-bar mode="determinate" [value]="40"></mat-progress-bar>
<mat-progress-bar mode="indeterminate" color="primary"></mat-progress-bar>
<mat-progress-bar mode="buffer" color="accent"></mat-progress-bar>
<mat-progress-bar mode="query" color="warn"></mat-progress-bar>`;

  public componentsoverviewProgress: any;
    submitted = false;


 constructor(private router: Router, private formBuilder: FormBuilder) {}
 

   ngOnInit() {
   this.componentsoverviewProgress = this.formBuilder.group({
	
	  Name: [null, Validators.compose([Validators.required])],
	  caseId: [null, Validators.compose([Validators.required])],
	  date: [null, Validators.compose([Validators.required])],
	  countryLoc: [null, Validators.compose([Validators.required])],
	  placeofBirth: [null, Validators.compose([Validators.required])],
	  Nationality: [null, Validators.compose([Validators.required])],
	  givenName: [null, Validators.compose([Validators.required])],
	  lastName: [null, Validators.compose([Validators.required])],
	  issuingState: [null, Validators.compose([Validators.required])],
	  passportcheckNat: [null, Validators.compose([Validators.required])],
	  idNumber: [null, Validators.compose([Validators.required])],
	  dateofExpiry: [null, Validators.compose([Validators.required])]
 });
  }


 public hasError = (controlName: string, errorName: string) => {
    return this.componentsoverviewProgress.controls[controlName].hasError(errorName);
  }
  componentsoverviewOnsubmit(){
    this.submitted = true;
    if (this.componentsoverviewProgress.invalid) {
      return;
    }
    alert('form fields are validated successfully!');  
  }

}
