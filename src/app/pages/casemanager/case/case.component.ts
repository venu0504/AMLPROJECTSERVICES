import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Case } from './interfaces/case.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { aioTableData, aioTableLabels } from '../../../../static-data/aio-table-data';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { SelectionModel } from '@angular/cdk/collections';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { FormControl } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MatSelectChange } from '@angular/material/select';
import theme from '../../../../@vex/utils/tailwindcss';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import { CountryData } from 'src/static-data/country.data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentsOverviewSVC } from '../../screening/components/components-overview/components-overview.service';

@Component({
  selector: 'vex-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ]
})
export class CaseComponent implements OnInit, AfterViewInit, OnDestroy {
  public casedet: any;
  submitted = false;
  layoutCtrl = new FormControl('boxed');
  id: any;
  sub:any;
  state$: object;
  displayedColumns: string[] = ["checkbox", "submittedTerm", "matchedNameType", "strength", "type", "gender", "dateOfBirth", 
                       "placeOfBirth", "nationality", "residence", "referenceId","category",
                        "creationDate", "modificationDate", "matchedDate", "lastResolvedOrReviewedDate",
                        "lastResolvedOrReviewedBy", "riskLevel"];

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Case[]> = new ReplaySubject<Case[]>(1);
  data$: Observable<Case[]> = this.subject$.asObservable();
  cases: Case[];

  @Input()
  columns: TableColumn<Case>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Entity Type', property: 'countryname', type: 'text', visible: true },
    { label: 'Name', property: 'statename', type: 'text', visible: true },
    { label: 'Matched Alias', property: 'statecode', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: '	Match Strength', property: 'status', type: 'text', visible: true },
    { label: '	Type', property: 'cc', type: 'text', visible: true },
    { label: '	Identification', property: 'vv', type: 'text', visible: true },
    { label: '	Category', property: 'ss', type: 'text', visible: true },
    { label: '	World-Check ID', property: 'ww', type: 'text', visible: true },
    { label: '	Entered Date ', property: 'yy', type: 'text', visible: true },
    { label: '	Updated Date ', property: 'hh', type: 'text', visible: true },
    { label: '	Matched Date ', property: 'ccs', type: 'text', visible: true },
    { label: 'Last Resolved/ Reviewed On ', property: 'ccdd', type: 'text', visible: true },
    { label: 'Last Resolved/ Reviewed By ', property: 'ssss', type: 'text', visible: true },
    { label: 'Risk Level ', property: 'cssscdd', type: 'text', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Case> | null;
  selection = new SelectionModel<Case>(true, []);
  searchCtrl = new FormControl();

  labels = aioTableLabels;

  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;

  theme = theme;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private dialog: MatDialog, private ComponentsOverviewSVC: ComponentsOverviewSVC) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData() {
    return of(CountryData.map(state => new Case(state)));
  }

  ngOnInit() {
    this.getData().subscribe(countries => {
      this.subject$.next(countries);
    });

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(
      filter<Case[]>(Boolean)
    ).subscribe(cases => {
      this.cases = cases;
      this.dataSource.data = cases;
    });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));


    this.casedet = this.formBuilder.group({
      casestatus: [null, Validators.compose([Validators.required])],
      risk: [null, Validators.compose([Validators.required])],
      reason: [null, Validators.compose([Validators.required])],
      note: [null, Validators.compose([Validators.required])],

    });
    this.state$ = this.activatedRoute.queryParams['value'];
    let data = {};
    this.ComponentsOverviewSVC.getCaseResult(`cases/${this.state$['value']}/results`).subscribe(
      async resdata => {
        const res = resdata;
        this.dataSource.data = this.formatJson(resdata);
        if (res) {
          console.log("reaponse", res)
        }
      }, async (error) => {
        console.log("error occured")
      });
  }
  formatJson(value){
    value.map(item=>{
        if(item.creationDate){
          item['creationDate'] = this.changeDateFormat(item['creationDate']);
        }
        if(item.modificationDate){
          item['modificationDate'] = this.changeDateFormat(item['modificationDate']);
        }
        if(item.referenceId){
          item['referenceId'] = item['referenceId'].substr(9);
        }
})
return value;
}

changeDateFormat(value){
  let date = new Date(value);
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  let n = date.getDate()+'-' + months[date.getMonth()] + '-'+date.getFullYear() +' '+ date.getHours() +':'+ date.getMinutes() ;
  return n;
  }


  public hasError = (controlName: string, errorName: string) => {
    return this.casedet.controls[controlName].hasError(errorName);
  }
  caseOnsubmit() {
    this.submitted = true;
    if (this.casedet.invalid) {
      return;
    }
    alert('form fields are validated successfully!');
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  deleteCustomer(state: Case) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    // this.cases.splice(this.cases.findIndex((existingCustomer) => existingCustomer.id === state.id), 1);
    // this.selection.deselect(state);
    // this.subject$.next(this.cases);
  }

  deleteCustomers(cases: Case[]) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    cases.forEach(c => this.deleteCustomer(c));
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

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

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  /*onLabelChange(change: MatSelectChange, row: Country) {
    const index = this.countries.findIndex(c => c === row);
    this.countries[index].labels = change.value;
    this.subject$.next(this.countries);
  }*/
  updateCustomer(value) {
    console.log("value", value)
  }
  // createCustomer() {
  //   console.log("createCustomer");
  // }

  ngOnDestroy() {
  }
}
