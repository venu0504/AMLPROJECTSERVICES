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
    public countryList:Array<Object> = [];
    public genderList:string[] = ['MALE', 'FEMALE','UNSPECIFIED'];
    public SelectedGender:string;
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
    public groupId:String = localStorage.getItem('groupId')
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiProvider: ApiProvider,
    private ComponentsOverviewSVC: ComponentsOverviewSVC) {}

  ngOnInit() {
    this.individualScreeningForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      caseId: [null, Validators.compose([])],
      date: [null, Validators.compose([Validators.required])],
      countryLoc: [null, Validators.compose([Validators.required])],
      placeofBirth: [null, Validators.compose([Validators.required])],
      nationality: [null, Validators.compose([Validators.required])],
      genderValue: [null, Validators.compose([Validators.required])]
   });
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
    return this.individualScreeningForm.controls[controlName].hasError(errorName);
  }
  
  getSecondaryField(){
    let totalFields = [];
      for(let i=0;i<=3;i++){
        if(this.individualScreeningForm.value.date){
          totalFields.push({typeId: 'SFCT_3',name: this.individualScreeningForm.value.date});
        }
        if(this.individualScreeningForm.value.date){
          totalFields.push({typeId: 'SFCT_4',name: this.individualScreeningForm.value.countryLoc});
        }
        if(this.individualScreeningForm.value.date){
          totalFields.push({typeId: 'SFCT_5',name: this.individualScreeningForm.value.placeofBirth});
        }
        if(this.individualScreeningForm.value.date){
          totalFields.push({typeId: 'SFCT_6',name: this.individualScreeningForm.value.nationality});
        }
      }
      return totalFields;
  }

  getFormatedDate(dateValue){
    let date = new Date(dateValue);
    return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();

  }
  createIndividualScreening(){
    // this.submitted = true;
    if (this.individualScreeningForm.invalid) {
      return;
    }
    // alert('form fields are validated successfully!');  
    this.submitted = true;
    const inputData = {
      groupId: localStorage.getItem('groupId'),
      entityType: 'INDIVIDUAL',
      providerTypes: [
            "WATCHLIST"
          ],
      name: this.individualScreeningForm.value.name,
      secondaryFields: [
        {"typeId": 'SFCT_1',"value": this.individualScreeningForm.value.genderValue},
        {"typeId": 'SFCT_2',"dateTimeValue": this.getFormatedDate(this.individualScreeningForm.value.date)},
        {"typeId": 'SFCT_3',"value": this.individualScreeningForm.value.countryLoc},
        {"typeId": 'SFCT_4',"value": this.individualScreeningForm.value.placeofBirth},
        {"typeId": 'SFCT_5',"value": this.individualScreeningForm.value.nationality}
      ],
      customFields: []
    }
    console.log({inputData})
    this.ComponentsOverviewSVC.createIndividualScreening('cases/screeningRequest',inputData).subscribe(
      async resdata => {
                const res = resdata;
                if(res){
                  let value = res.caseId;
                  this.router.navigate(['casemanager/case'], {queryParams: {value}});
                }
        }, async (error) => {
          console.log("error occured")
        });
  }

}
