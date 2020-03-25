import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { ApiProvider } from 'src/app/services/api-provider';
import { ComponentsOverviewSVC } from '../../components-overview.service';



@Component({
  selector: 'vex-vessel',
  templateUrl: './vessel.component.html',
  styleUrls: ['./vessel.component.scss']
})
export class VesselComponent implements OnInit {

  tiles: any[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  gridListHTML: string =
    `<mat-grid-list cols="4" rowHeight="100px">
  <mat-grid-tile *ngFor="let tile of tiles" [colspan]="tile.cols" [rowspan]="tile.rows"
                  [style.background]="tile.color">
      {{tile.text}}
  </mat-grid-tile>
</mat-grid-list>`;

      public vesselScreeningForm: any;
    submitted = false;


 constructor(
   private router: Router, 
   private formBuilder: FormBuilder,
   private apiProvider: ApiProvider,
   private ComponentsOverviewSVC: ComponentsOverviewSVC) {}

ngOnInit() {
this.vesselScreeningForm = this.formBuilder.group({
	  name: [null, Validators.compose([Validators.required])],
	  caseId: [null, Validators.compose([Validators.required])],
	  imoNumber: [null, Validators.compose([Validators.required])],
	   
	 
 });
  }


 public hasError = (controlName: string, errorName: string) => {
    return this.vesselScreeningForm.controls[controlName].hasError(errorName);
  }
  createVesselScreening(){
    this.submitted = true;
    // if (this.vesselScreeningForm.invalid) {
    //   return;
    // }
    // alert('form fields are validated successfully!');  
    // const inputData = {
    //   name: this.vesselScreeningForm.value.name,
    //   caseId: this.vesselScreeningForm.value.caseId,
    //   registeredCountry: this.vesselScreeningForm.value.registeredCountry
    // }
    const inputData = {
      groupId: localStorage.getItem('groupId'),
      entityType: 'VESSEL',
      providerTypes: [
            "WATCHLIST"
          ],
      name: this.vesselScreeningForm.value.name,
      secondaryFields: [],
      customFields: []
    }
    /*
    {
  "groupId":"{{group-id}}",
  "entityType": "VESSEL",
  "providerTypes": [
    "WATCHLIST"
  ],
  "name": "Hydra",
  "secondaryFields":[
	{  
        "typeId":"SFCT_7",
        "value":"9362059"
    }
  ],
  "customFields":[
  	{  
        "typeId":"{{custom-field-1}}",
        "value":"custom field 1 sample value"
    },
    {  
        "typeId":"{{custom-field-2}}",
        "value":"custom field 2 sample value"
    },
    {  
    	"typeId":"{{custom-field-3}}",
        "value":"mandatory custom field sample value"
    }
   ]
}
    */ 
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
