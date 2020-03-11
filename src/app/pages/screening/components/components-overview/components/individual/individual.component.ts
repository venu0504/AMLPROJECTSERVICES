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
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiProvider: ApiProvider) {}

  ngOnInit() {
    this.individualScreeningForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      caseId: [null, Validators.compose([Validators.required])],
      date: [null, Validators.compose([Validators.required])],
      countryLoc: [null, Validators.compose([Validators.required])],
      placeofBirth: [null, Validators.compose([Validators.required])],
      nationality: [null, Validators.compose([Validators.required])],
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
    const inputData = {
      name: this.individualScreeningForm.value.name,
      caseId: this.individualScreeningForm.value.caseId,
      date: this.individualScreeningForm.value.date,
      countryLoc: this.individualScreeningForm.value.countryLoc,
      placeofBirth: this.individualScreeningForm.value.placeofBirth,
      nationality: this.individualScreeningForm.value.nationality
    }
    console.log({inputData})
    this.apiProvider.createIndividualScreening('createIndividualScreening',inputData).subscribe(
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
