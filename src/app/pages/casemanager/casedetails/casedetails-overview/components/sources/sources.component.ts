import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {

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

      public componentsoverviewGridList: any;
    submitted = false;


 constructor(private router: Router, private formBuilder: FormBuilder) {}

ngOnInit() {
this.componentsoverviewGridList = this.formBuilder.group({
	  Name: [null, Validators.compose([Validators.required])],
	  caseId: [null, Validators.compose([Validators.required])],
	  imoNumber: [null, Validators.compose([Validators.required])],
	   
	 
 });
  }


 public hasError = (controlName: string, errorName: string) => {
    return this.componentsoverviewGridList.controls[controlName].hasError(errorName);
  }
  componentsoverviewOnsubmit(){
    this.submitted = true;
    if (this.componentsoverviewGridList.invalid) {
      return;
    }
    alert('form fields are validated successfully!');  
  }
}
