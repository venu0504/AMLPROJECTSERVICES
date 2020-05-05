import { Component, OnInit } from '@angular/core';
import icFavorite from '@iconify/icons-ic/twotone-favorite';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'vex-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {

  flatButtonsHTML: string =
    `<button mat-button>Button</button>
<button mat-button color="primary">Primary</button>
<button mat-button color="accent">Accent</button>
<button mat-button color="warn">Warn</button>
<button mat-button disabled="true">Disabled</button>`;

  raisedButtonsHTML: string =
    `<button mat-raised-button>Button</button>
<button mat-raised-button color="primary">Primary</button>
<button mat-raised-button color="accent">Accent</button>
<button mat-raised-button color="warn">Warn</button>
<button mat-raised-button disabled="true">Disabled</button>`;

  fabHTML: string =
    `<button mat-fab color="primary"><mat-icon>grade</mat-icon></button>
<button mat-fab color="accent"><mat-icon>favorite</mat-icon></button>
<button mat-fab color="warn"><mat-icon>build</mat-icon></button>
<button mat-fab disabled="true"><mat-icon>lock</mat-icon></button>
<button mat-mini-fab color="primary"><mat-icon>favorite</mat-icon></button>
<button mat-mini-fab color="accent"><mat-icon>thumb_up</mat-icon></button>
<button mat-mini-fab color="warn"><mat-icon>build</mat-icon></button>
<button mat-mini-fab disabled="true"><mat-icon>lock</mat-icon></button>`;

  iconButtonHTML: string =
    `<button mat-icon-button><mat-icon>menu</mat-icon></button>
<button mat-icon-button color="primary"><mat-icon>grade</mat-icon></button>
<button mat-icon-button color="accent"><mat-icon>favorite</mat-icon></button>
<button mat-icon-button color="warn"><mat-icon>build</mat-icon></button>
<button mat-icon-button disabled="true"><mat-icon>lock</mat-icon></button>`;

   public componentsoverviewButtons: any;
    submitted = false;


 constructor(private router: Router, private formBuilder: FormBuilder) {}

ngOnInit() {
this.componentsoverviewButtons = this.formBuilder.group({
	  batchName: [null, Validators.compose([Validators.required])],
	  registrationKey: [null, Validators.compose([Validators.required])],
	   
	   
	 
 });
  }


 public hasError = (controlName: string, errorName: string) => {
    return this.componentsoverviewButtons.controls[controlName].hasError(errorName);
  }
  componentsoverviewOnsubmit(){
    this.submitted = true;
    if (this.componentsoverviewButtons.invalid) {
      return;
    }
    alert('form fields are validated successfully!');  
  }
}
