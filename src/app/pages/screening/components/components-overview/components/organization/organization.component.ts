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
import { ComponentsOverviewSVC } from '../../components-overview.service';


@Component({
  selector: 'vex-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent {

  result: string;
  public groupId:String = localStorage.getItem('groupId');
  public nonEditable:Boolean = true;
  dialogHTML =
    `<button mat-raised-button type="button" (click)="openDialog()" color="primary">Open Dialog</button>
<p *ngIf="result">You chose: {{ result }}</p>
`;




    public organizationScreeningForm: any;
    submitted = false;
    public countryList:Array<Object> = [];
    //   {
    //     id: 'ABW',
    //     name: 'Aruba'},
    //   {
    //     id: 'AFG',
    //     name: 'Afghanistan'},
    //   {
    //     id: 'ARG',
    //     name: 'Argentina'
    //   },
    //   {
    //     id: 'IND',
    //     name: 'India'
    //   },
    //   {
    //     id: 'UAE',
    //     name: 'United Arab Emirates'
    //   }
    // ];
	
  constructor(
    private router: Router, 
    private formBuilder: FormBuilder,
    private apiProvider: ApiProvider,
    private ComponentsOverviewSVC: ComponentsOverviewSVC) {}

ngOnInit() {
this.organizationScreeningForm = this.formBuilder.group({
	  name: [null, Validators.compose([Validators.required])],
	  caseId: [null, Validators.compose([])],
	  registeredCountry: [null, Validators.compose([Validators.required])],
});
// need to update the logic and keep it in parent
this.ComponentsOverviewSVC.getCountryList('reference/countries').subscribe(
  async resdata => {
            const res = resdata;
            if(res){
              console.log('res country',res)
              this.countryList = res;
            }
    }, async (error) => {
      console.log("error occured")
    });
  }


 public hasError = (controlName: string, errorName: string) => {
    return this.organizationScreeningForm.controls[controlName].hasError(errorName);
  }

  createOrganizationScreening(){
    this.submitted = true;
    if (this.organizationScreeningForm.invalid) {
      return;
    }
    // alert('form fields are validated successfully!');  
    // const inputData = {
    //   name: this.organizationScreeningForm.value.name,
    //   caseId: this.organizationScreeningForm.value.caseId,
    //   registeredCountry: this.organizationScreeningForm.value.registeredCountry
    // }
    const inputData = {
      groupId: localStorage.getItem('groupId'),
      entityType: 'INDIVIDUAL',
      providerTypes: [
            "WATCHLIST"
          ],
      name: this.organizationScreeningForm.value.name,
      secondaryFields:[
        {typeId: 'SFCT_3',name: this.organizationScreeningForm.value.registeredCountry},
        ],
        customFields:[]
    }
    // {
    //   "groupId":"{{group-id}}",
    //   "entityType": "ORGANISATION",
    //   "providerTypes": [
    //     "WATCHLIST"
    //   ],
    //   "name": "Apple",
    //   "secondaryFields":[
    //   {  
    //         "typeId":"SFCT_6",
    //         "value":"USA"
    //     }	
    //   ],
    //   "customFields":[
    //     {  
    //         "typeId":"{{custom-field-1}}",
    //         "value":"custom field 1 sample value"
    //     },
    //     {  
    //         "typeId":"{{custom-field-2}}",
    //         "value":"custom field 2 sample value"
    //     },
    //     {  
    //       "typeId":"{{custom-field-3}}",
    //         "value":"mandatory custom field sample value"
    //     }
    //    ]
    // }
    console.log({inputData})
    this.ComponentsOverviewSVC.createOrganizationScreening('cases/screeningRequest',inputData).subscribe(
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


