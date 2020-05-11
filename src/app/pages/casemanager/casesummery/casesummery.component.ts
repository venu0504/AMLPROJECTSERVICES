import { SelectionModel } from '@angular/cdk/collections';
import theme from '../../../../@vex/utils/tailwindcss';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource } from '@angular/material';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icSettings from '@iconify/icons-ic/twotone-settings';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ComponentsOverviewSVC } from '../../screening/components/components-overview/components-overview.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'vex-casesummery',
  templateUrl: './casesummery.component.html',
  styleUrls: ['./casesummery.component.scss'],

})
export class CasesummeryComponent implements OnInit {

  constructor(private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private ComponentsOverviewSVC: ComponentsOverviewSVC,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  onCustomFields: FormGroup;
  state$: object;
  submitted = false;
  onGroupForm: FormGroup;
  icSettings = icSettings;
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  icMoreVert = icMoreVert;
  theme = theme;
  closeResult: string;
  ngOnInit() {
    // this.state$ = this.activatedRoute.queryParams.subscribe(params=>{
    //   return params['routeParam']
    // });
    this.onCustomFields = this.formBuilder.group({
      fields: [null, Validators.compose([Validators.required])],
      receiveEmail: [null, Validators.compose([Validators.required])],
      locale: [null, Validators.compose([Validators.required])]


    });


    this.onGroupForm = this.formBuilder.group({
      positive: [null, Validators.compose([
        Validators.required
      ])],

      risk: [null, Validators.compose([
        Validators.required
      ])],
      reason: [null, Validators.compose([
        Validators.required
      ])],
      posiible: [null, Validators.compose([
        Validators.required
      ])],

      posiibleRisk: [null, Validators.compose([
        Validators.required
      ])],

      posiiblReason: [null, Validators.compose([
        Validators.required
      ])],


      falses: [null, Validators.compose([
        Validators.required
      ])],

      falsesRisk: [null, Validators.compose([
        Validators.required
      ])],


      falsesReason: [null, Validators.compose([
        Validators.required
      ])],


      unspecified: [null, Validators.compose([
        Validators.required
      ])],

      unspecifiedRisk: [null, Validators.compose([
        Validators.required
      ])],


      unspecifiedReason: [null, Validators.compose([
        Validators.required
      ])]


    });
    // const caseId=  this.state$['value']; 
    const caseId = '0a3687cf-6b99-1f52-9afe-d2f000707848';
    this.ComponentsOverviewSVC.getCaseSummaryData(`cases/summary`).subscribe(
      async resdata => {
                const res = resdata;
                if(res){
                  console.log("summary result",res)
                  // this.caseManagerList = res;
                  // let formattedResult = this.formatJson(res);
                  // this.dataSource.data = formattedResult;
                  // console.log("value summary",formattedResult)

                }
        }, async (error) => {
          console.log("error occured")
        });
  }



  openBackDropCustomClass(content) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content) { this.modalService.open(content, { size: 'lg' }); }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  openScrollableUser(longUser) {
    this.modalService.open(longUser, { size: 'lg', scrollable: true });
  }
  openScrollableAuto(longAuto) {
    this.modalService.open(longAuto, { size: 'lg', scrollable: true });
  }


  resetform() {
    this.onCustomFields.reset();
  }
  resetBankform() {
    this.onGroupForm.reset();
  }

}