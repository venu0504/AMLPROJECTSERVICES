import {SelectionModel} from '@angular/cdk/collections';
import theme from '../../../../@vex/utils/tailwindcss';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatTableDataSource} from '@angular/material';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icSettings from '@iconify/icons-ic/twotone-settings';
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
  selector: 'vex-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss'],
  
})
export class AuditComponent implements OnInit {
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
  ngOnInit() {
  }
  closeResult: string;

  constructor(private modalService: NgbModal) {}

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
