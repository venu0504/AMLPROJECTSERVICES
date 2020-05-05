import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icClose from '@iconify/icons-ic/twotone-close';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-keydata',
  templateUrl: './keydata.component.html',
  styleUrls: ['./keydata.component.scss']
})
export class KeydataComponent implements OnInit {

public componentsoverviewAutocomplete: any;
    submitted = false;


 constructor(private router: Router, private formBuilder: FormBuilder) {}
 
  autocompleteHTML =
    `<mat-input-container>
  <mat-label>State</mat-label>
  <input type="text" matInput [matAutocomplete]="auto" [formControl]="stateCtrl">
  <mat-autocomplete #auto="matAutocomplete">
    <mat-option *ngFor="let option of options" [value]="option">
      {{ option }}
    </mat-option>
  </mat-autocomplete>
</mat-input-container>
`;



  icClose = icClose;
  icArrowDropDown = icArrowDropDown;

  ngOnInit() {
this.componentsoverviewAutocomplete = this.formBuilder.group({
	
	  Name: [null, Validators.compose([Validators.required])],
	  caseId: [null, Validators.compose([Validators.required])],
	  date: [null, Validators.compose([Validators.required])],
	  countryLoc: [null, Validators.compose([Validators.required])],
	  placeofBirth: [null, Validators.compose([Validators.required])],
	  Nationality: [null, Validators.compose([Validators.required])],
	    
	   
	 
 });
  }


 public hasError = (controlName: string, errorName: string) => {
    return this.componentsoverviewAutocomplete.controls[controlName].hasError(errorName);
  }
  componentsoverviewOnsubmit(){
    this.submitted = true;
    if (this.componentsoverviewAutocomplete.invalid) {
      return;
    }
    alert('form fields are validated successfully!');  
  }
}
