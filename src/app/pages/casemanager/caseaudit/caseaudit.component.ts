import {SelectionModel} from '@angular/cdk/collections';
import theme from '../../../../@vex/utils/tailwindcss';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatTableDataSource} from '@angular/material';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icSettings from '@iconify/icons-ic/twotone-settings';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material/select';


import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { ComponentsOverviewSVC } from '../../screening/components/components-overview/components-overview.service';
import { CaseAudit } from './interfaces/caseaudit.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'vex-caseaudit',
  templateUrl: './caseaudit.component.html',
  styleUrls: ['./caseaudit.component.scss'],
  
})
export class CaseauditComponent implements OnInit {
  icSettings = icSettings;

  displayedColumns: string[] = ['checkbox','eventDate', 'actionedByUserName', 'note', 'actionType'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: MatTableDataSource<CaseAudit> | null;
  selection = new SelectionModel<CaseAudit>(true, []);
  auditCase: CaseAudit[];
  icMoreVert = icMoreVert;
  theme = theme;
  closeResult: string;
  subject$: ReplaySubject<CaseAudit[]> = new ReplaySubject<CaseAudit[]>(1);
  data$: Observable<CaseAudit[]> = this.subject$.asObservable();
  showLinkedData = true;

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  constructor(private modalService: NgbModal, private ComponentsOverviewSVC: ComponentsOverviewSVC) {}


  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  
  selectRow($event, dataSource) {
    // console.log($event.checked);
     if ($event.checked) {
     }
 
     }
  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.data$.pipe(
      filter<CaseAudit[]>(Boolean)
    ).subscribe(cases => {
      this.auditCase = cases;
      this.dataSource.data = cases;
    });

    const caseId = '0a3687cf-6b99-1f52-9afe-d2f000707848';
    const id = '0a3687d0-6a9c-1394-9aa8-fb0e000002da';
    const payload = {
      'query': `actionedByUserId==${id};eventDate>2010-01-01T00:00:00Z;eventDate<2020-06-01T00:00:00Z`
    }
    this.ComponentsOverviewSVC.getAuditDetailsData(`cases/${caseId}/auditEvents`,payload).subscribe(
      async resdata => {
                const res = resdata;
                if(res.results.length>0){
                  console.log("audit result",res)
                  this.dataSource.data = this.formatJson(res.results);

                }
        }, async (error) => {
          console.log("error occured")
        });
  }

  formatJson(value){
    value.map(item=>{
        if(item.eventDate){
          item['eventDate'] = this.changeDateFormat(item['eventDate']);
        }
        if(item.actionType==="SCREENED_CASE"){
          item['actionType'] = 'Case Screened for World-Check';
          this.showLinkedData = false;
        }else{
          item['actionType'] = 'World-check matches resolve as possible';
          this.showLinkedData = true;
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




  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
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

 openXl(content) { this.modalService.open(content, {size: 'lg'}); }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
    openScrollableUser(longUser) {
    this.modalService.open(longUser, { size: 'lg' ,scrollable: true });
  }
      openScrollableAuto(longAuto) {
    this.modalService.open(longAuto, { size: 'lg' ,scrollable: true });
  }
  
  
      openScrollableContentworld(longContentworldcheck) {
    this.modalService.open(longContentworldcheck, { size: 'lg' ,scrollable: true });
  }
  
  
      openScrollableResolutiontool(longResolutiontool) {
    this.modalService.open(longResolutiontool, { size: 'lg' ,scrollable: true });
  }
  
      openScrollableAutoresolution(longAutoresolution) {
    this.modalService.open(longAutoresolution, { size: 'lg' ,scrollable: true });
  }
}

//http://168.61.211.238:3000/v2/cases/0a3687cf-6b99-1f52-9afe-d2f000707848/auditEvents