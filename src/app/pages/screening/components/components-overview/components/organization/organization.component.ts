import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';


import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';

import { ApiProvider } from 'src/app/services/api-provider';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent {

  result: string;

  dialogHTML =
    `<button mat-raised-button type="button" (click)="openDialog()" color="primary">Open Dialog</button>
<p *ngIf="result">You chose: {{ result }}</p>
`;




    public organizationScreeningForm: any;
    submitted = false;
	
	
  constructor(
    private router: Router, 
    private formBuilder: FormBuilder,
    private apiProvider: ApiProvider) {}

ngOnInit() {
this.organizationScreeningForm = this.formBuilder.group({
	  name: [null, Validators.compose([Validators.required])],
	  caseId: [null, Validators.compose([Validators.required])],
	  registeredCountry: [null, Validators.compose([Validators.required])],
	    
	   
	 
 });
  }


 public hasError = (controlName: string, errorName: string) => {
    return this.organizationScreeningForm.controls[controlName].hasError(errorName);
  }

  createOrganizationScreening(){
    this.submitted = true;
    // if (this.organizationScreeningForm.invalid) {
    //   return;
    // }
    // alert('form fields are validated successfully!');  
    const inputData = {
      name: this.organizationScreeningForm.value.name,
      caseId: this.organizationScreeningForm.value.caseId,
      registeredCountry: this.organizationScreeningForm.value.registeredCountry
    }
    console.log({inputData})
    this.apiProvider.createOrganizationScreening('createcreateOrganizationScreeningSingleScreening',inputData).subscribe(
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


