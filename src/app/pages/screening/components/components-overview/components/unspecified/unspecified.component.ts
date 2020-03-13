import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import icLock from '@iconify/icons-ic/twotone-lock';
import icLockOpen from '@iconify/icons-ic/twotone-lock-open';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiProvider } from 'src/app/services/api-provider';



@Component({
  selector: 'vex-unspecified',
  templateUrl: './unspecified.component.html',
  styleUrls: ['./unspecified.component.scss']
})
export class UnspecifiedComponent implements OnInit {

  inputHTML =
    `<mat-form-field>
  <button *ngIf="!visible" type="button" mat-icon-button matPrefix (click)="show()">
    <mat-icon matPrefix>lock</mat-icon>
  </button>
  <button *ngIf="visible" type="button" mat-icon-button matPrefix (click)="hide()">
    <mat-icon matPrefix>lock_open</mat-icon>
  </button>
  <mat-label>Password</mat-label>
  <input matInput [type]="inputType">
  <button *ngIf="!visible" type="button" mat-icon-button matSuffix (click)="show()">
    <mat-icon>visibility</mat-icon>
  </button>
  <button *ngIf="visible" type="button" mat-icon-button matSuffix (click)="hide()">
    <mat-icon>visibility_off</mat-icon>
  </button>
</mat-form-field>`;
  inputType = 'password';
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  icLock = icLock;
  icLockOpen = icLockOpen;

  public unSpecifiedScreeningForm: any;
    submitted = false;


 constructor(
        private router: Router, 
        private formBuilder: FormBuilder,
        private apiProvider: ApiProvider) {}

ngOnInit() {
this.unSpecifiedScreeningForm = this.formBuilder.group({
	  name: [null, Validators.compose([Validators.required])],
	  caseId: [null, Validators.compose([Validators.required])],
	   
	   
	 
 });
  }


 public hasError = (controlName: string, errorName: string) => {
    return this.unSpecifiedScreeningForm.controls[controlName].hasError(errorName);
  }


  createUnspecifiedScreening(){
    // this.submitted = true;
    // if (this.unSpecifiedScreeningForm.invalid) {
    //   return;
    // }
    // alert('form fields are validated successfully!');  
    const inputData = {
      name: this.unSpecifiedScreeningForm.value.name,
      caseId: this.unSpecifiedScreeningForm.value.caseId,
    }
    console.log({inputData})
    this.apiProvider.createUnspecifiedScreening('createUnspecifiedScreening',inputData).subscribe(
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
