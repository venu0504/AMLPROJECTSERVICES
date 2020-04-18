import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Case1 } from './interfaces/case1.model';
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
import { ComponentsOverviewSVC } from '../../screening/components/components-overview/components-overview.service';



@Component({
  selector: 'vex-case1',
  templateUrl: './case1.component.html',
  styleUrls: ['./case1.component.scss'],
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
export class Case1Component implements OnInit, AfterViewInit, OnDestroy {

  layoutCtrl = new FormControl('boxed');
  public caseManagerList: Array<Object> = [];
  displayedColumns: string[] = ['checkbox','entityType', 'name', 'caseId', 'totalMatches','worldcheckUnResolved',
                                'worldCheckReviewRequired','caseScreeningState','lifecycleState','asignee','lastModifiedBy',
                                'modificationDate','modificationDate','createdBy','creationDate','lastScreenedDate'];
  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Case1[]> = new ReplaySubject<Case1[]>(1);
  data$: Observable<Case1[]> = this.subject$.asObservable();
  states: Case1[];

  @Input()
  columns: TableColumn<Case1>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Entity Type ', property: 'entity', type: 'text', visible: true },
    { label: 'Case Name', property: 'casename', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'ID', property: 'ids', type: 'text', visible: true },
    { label: 'Mandatory Actions	', property: 'mandatory', type: 'text', visible: true },
    { label: 'World-Check	', property: 'worldcheck', type: 'text', visible: true },
    { label: 'OGS', property: 'ogs', type: 'text', visible: true },
    { label: 'Archived	', property: 'archived', type: 'text', visible: true },
    { label: 'Assignee	', property: 'asignee', type: 'text', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Case1> | null;
  selection = new SelectionModel<Case1>(true, []);
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

  constructor(private dialog: MatDialog, private ComponentsOverviewSVC : ComponentsOverviewSVC) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData() {
    return of(CountryData.map(state => new Case1(state)));
  }

  ngOnInit() {
    this.getData().subscribe(countries => {
      this.subject$.next(countries);
    });

    this.dataSource = new MatTableDataSource();

    // this.data$.pipe(
    //   filter<Case1[]>(Boolean)
    // ).subscribe(states => {
    //   this.states = states;
    //   // this.dataSource.data = states;
    // });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));

    let data = {
      "query": "modificationDate>=2019-01-01T00:00:00.000Z",
      "sort": [
          {
              "columnName": "modificationDate",
              "order": "ASCENDING"
          },
          {
              "columnName": "modifierUserId",
              "order": "DESCENDING"
          }
      ],
      "cursorOptions": {
          "itemsPerPage": 10
      }
  }
    this.ComponentsOverviewSVC.getSummaries('cases/summariesnew',data).subscribe(
      async resdata => {
                const res = resdata;
                if(res){
                  this.caseManagerList = res;
                  let formattedResult = this.formatJson(res);
                  this.dataSource.data = formattedResult;
                  console.log("value summary",formattedResult)

                }
        }, async (error) => {
          console.log("error occured")
        });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  formatJson(value){
        value.map(item=>{
        if(item.creator){
            item['createdBy'] = item.creator.fullName
          delete item.creator
        }
        if(item.modifier){
        item['lastModifiedBy'] = item.modifier.fullName
          delete item.modifier
        }
        if(item.providerSummaries){
          item['totalMatches'] = item.providerSummaries.WATCHLIST.totalMatches;
          item['worldcheckUnResolved'] = item.providerSummaries.WATCHLIST.reviewRequired;
          item['worldCheckReviewRequired'] = item.providerSummaries.WATCHLIST.unresolved;
          delete item.providerSummaries;
        }
        if(item.modificationDate){
          item['modificationDate'] = this.changeDateFormat(item.modificationDate)
        }
        if(item.requestFromScreenedDate){
          item['requestFromScreenedDate'] = this.changeDateFormat(item.requestFromScreenedDate)
        }
        if(item.lastScreenedDate){
          item['lastScreenedDate'] = this.changeDateFormat(item.lastScreenedDate)
        }
        if(item.creationDate){
          item['creationDate'] = this.changeDateFormat(item.creationDate);
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

  deleteCustomer(state: Case1) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    this.states.splice(this.states.findIndex((existingCustomer) => existingCustomer.caseId === state.caseId), 1);
    this.selection.deselect(state);
    this.subject$.next(this.states);
  }

  deleteCustomers(states: Case1[]) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    states.forEach(c => this.deleteCustomer(c));
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

  updateCustomer(value){
    console.log("value", value)
  }
  createCustomer(){
    console.log("createCustomer");
  }
  ngOnDestroy() {
  }
}
