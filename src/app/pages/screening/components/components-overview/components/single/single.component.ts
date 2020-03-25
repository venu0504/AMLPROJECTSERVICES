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
import { ApiProvider } from 'src/app/services/api-provider';
import { ComponentsOverviewSVC } from '../../components-overview.service';



@Component({
  selector: 'vex-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

public singleScreeningForm: any;
    submitted = false;


 constructor(
    private router: Router,  
    private formBuilder: FormBuilder,
    private apiProvider: ApiProvider,
    private ComponentsOverviewSVC: ComponentsOverviewSVC) {}
 
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
this.singleScreeningForm = this.formBuilder.group({
	
	  name: [null, Validators.compose([Validators.required])],
	  caseId: [null, Validators.compose([Validators.required])],
	  date: [null, Validators.compose([Validators.required])],
	  countryLoc: [null, Validators.compose([Validators.required])],
	  placeofBirth: [null, Validators.compose([Validators.required])],
	  nationality: [null, Validators.compose([Validators.required])],
	  
 });
 this.ComponentsOverviewSVC.getGroups('groups').subscribe(
  async resdata => {
            const res = resdata;
            if(res){
              localStorage.setItem('groupId', res[0].id);
            }
    }, async (error) => {
      console.log("error occured")
    });

  }


 public hasError = (controlName: string, errorName: string) => {
    return this.singleScreeningForm.controls[controlName].hasError(errorName);
  }
  createSingleScreening(){
    this.submitted = true;
    const inputData = {
      name: this.singleScreeningForm.value.name,
      caseId: this.singleScreeningForm.value.caseId,
      date: this.singleScreeningForm.value.date,
      countryLoc: this.singleScreeningForm.value.countryLoc,
      placeofBirth: this.singleScreeningForm.value.placeofBirth,
      nationality: this.singleScreeningForm.value.nationality
    }
    console.log({inputData})
    this.apiProvider.createSingleScreening('createSingleScreening',inputData).subscribe(
      async resdata => {
                const res = resdata;
                if(res){
                  //show some message
                }
        }, async (error) => {
          console.log("error occured")
        });
    }

  //   if (this.singleScreeningForm.invalid) {
  //     return;
  //   }
  //   alert('form fields are validated successfully!');  
  // }
// , async (error) => {
  // console.log("error occured")
// }

}
