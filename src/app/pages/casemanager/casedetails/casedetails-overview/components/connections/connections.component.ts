import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';

import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent {

  result: string;

  dialogHTML =
    `<button mat-raised-button type="button" (click)="openDialog()" color="primary">Open Dialog</button>
<p *ngIf="result">You chose: {{ result }}</p>
`;




    public componentsoverviewDialogs: any;
    submitted = false;
	
	
  constructor(private router: Router, private formBuilder: FormBuilder) {}

ngOnInit() {
this.componentsoverviewDialogs = this.formBuilder.group({
	  Name: [null, Validators.compose([Validators.required])],
	  caseId: [null, Validators.compose([Validators.required])],
	  registeredCountry: [null, Validators.compose([Validators.required])],
	    
	   
	 
 });
  }


 public hasError = (controlName: string, errorName: string) => {
    return this.componentsoverviewDialogs.controls[controlName].hasError(errorName);
  }
  componentsoverviewOnsubmit(){
    this.submitted = true;
    if (this.componentsoverviewDialogs.invalid) {
      return;
    }
    alert('form fields are validated successfully!');  
  }
}


