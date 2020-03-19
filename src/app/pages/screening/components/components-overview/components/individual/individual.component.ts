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


@Component({
  selector: 'vex-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {

  checkboxHTML =
    `<mat-checkbox>Checkbox</mat-checkbox>
<mat-checkbox color="primary" [checked]="true">Primary</mat-checkbox>
<mat-checkbox color="accent" [checked]="true">Accent</mat-checkbox>
<mat-checkbox color="warn" [checked]="true">Warn</mat-checkbox>
<mat-checkbox disabled [checked]="true">Disabled</mat-checkbox>
<mat-checkbox [indeterminate]="true">Indeterminate</mat-checkbox>`;

   public individualScreeningForm: any;
    submitted = false;
    public countryList:Array<Object> = [
      {
        id: 'ABW',
        name: 'Aruba'},
      {
        id: 'AFG',
        name: 'Afghanistan'},
      {
        id: 'ARG',
        name: 'Argentina'
      },
      {
        id: 'IND',
        name: 'India'
      },
      {
        id: 'UAE',
        name: 'United Arab Emirates'
      }
    ];
    public groupId:String = localStorage.getItem('groupId')
    public nonEditable:Boolean = true;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiProvider: ApiProvider) {}

  ngOnInit() {
    this.individualScreeningForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      // caseId: [null, Validators.compose([Validators.required])],
      date: [null, Validators.compose([Validators.required])],
      countryLoc: [null, Validators.compose([Validators.required])],
      placeofBirth: [null, Validators.compose([Validators.required])],
      nationality: [null, Validators.compose([Validators.required])],
   });
   this.apiProvider.getCountryList('reference/countries').subscribe(
    async resdata => {
              const res = resdata;
              if(res){
                //show some message
              }
      }, async (error) => {
        console.log("error occured")
      });
  }


 public hasError = (controlName: string, errorName: string) => {
    return this.individualScreeningForm.controls[controlName].hasError(errorName);
  }
  createIndividualScreening(){
    // this.submitted = true;
    // if (this.individualScreeningForm.invalid) {
    //   return;
    // }
    // alert('form fields are validated successfully!');  
    this.submitted = true;
    // const inputData = {
    //   name: this.individualScreeningForm.value.name,
    //   caseId: this.individualScreeningForm.value.caseId,
    //   date: this.individualScreeningForm.value.date,
    //   countryLoc: this.individualScreeningForm.value.countryLoc,
    //   placeofBirth: this.individualScreeningForm.value.placeofBirth,
    //   nationality: this.individualScreeningForm.value.nationality
    // }
    const inputData = {
      groupId: localStorage.getItem('groupId'),
      entityType: 'INDIVIDUAL',
      providerTypes: [
            "WATCHLIST"
          ],
      name: this.individualScreeningForm.value.name,
      secondaryFields: [],
      customFields: []
    }
    // {
    //   "groupId":"{{group-id}}",
    //   "entityType": "INDIVIDUAL",
    //   "providerTypes": [
    //     "WATCHLIST"
    //   ],
    //   "name": "putin",
    //   "secondaryFields":[],
    //   "customFields":[]
    // }
    console.log({inputData})
    this.apiProvider.createIndividualScreening('cases/screeningRequest',inputData).subscribe(
      async resdata => {
                const res = resdata;
                if(res){
                  //show some message
                }
        }, async (error) => {
          console.log("error occured")
        });
  }

}
