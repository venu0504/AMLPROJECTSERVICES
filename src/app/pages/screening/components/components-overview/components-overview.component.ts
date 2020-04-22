import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollbarDirective } from '../../../../../@vex/components/scrollbar/scrollbar.directive';
import { LayoutService } from '../../../../../@vex/services/layout.service';

import { SingleComponent } from './components/single/single.component';
import { VesselComponent } from './components/vessel/vessel.component';
import { BatchComponent } from './components/batch/batch.component';
import { IndividualComponent } from './components/individual/individual.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { PassportcheckComponent } from './components/passport-check/passport-check.component';
import { UnspecifiedComponent } from './components/unspecified/unspecified.component';
import { ComponentsOverviewSVC } from './components-overview.service';


import { ScrollDispatcher } from '@angular/cdk/overlay';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { stagger80ms } from '../../../../../@vex/animations/stagger.animation';

@Component({
  selector: 'vex-components-overview',
  templateUrl: './components-overview.component.html',
  styleUrls: ['./components-overview.component.scss'],
  animations: [
    stagger80ms,
    fadeInRight400ms,
    fadeInUp400ms
  ]
})
export class ComponentsOverviewComponent implements OnInit {

  menuWidth = '250px';
  showIndividualForm: Boolean = true;
  showVesselForm: Boolean = false;
  showOrganizationForm: Boolean = false;
  showUnspecifiedForm: Boolean = false;
  currentForm: string = 'individual';

  // @ViewChild(SingleComponent, { read: ElementRef, static: true }) private single: ElementRef;
  // @ViewChild(BatchComponent, { read: ElementRef, static: true }) private batch: ElementRef;

  @ViewChild(IndividualComponent, { read: ElementRef, static: true }) private individual: ElementRef;
  @ViewChild(OrganizationComponent, { read: ElementRef, static: true }) private organization: ElementRef;
  @ViewChild(VesselComponent, { read: ElementRef, static: true }) private vessel: ElementRef;
  @ViewChild(UnspecifiedComponent, { read: ElementRef, static: true }) private unspecified: ElementRef;

  @ViewChild(PassportcheckComponent, { read: ElementRef, static: true }) private passportcheck: ElementRef;
  

  @ViewChild('contentScroll', { read: ScrollbarDirective, static: false }) private contentScroll: ScrollbarDirective;

  constructor(private layoutService: LayoutService,
              private scrollDispatcher: ScrollDispatcher,
              private elem: ElementRef,
              private ComponentsOverviewSVC: ComponentsOverviewSVC) {
  }

  ngOnInit() {
    this.ComponentsOverviewSVC.getGroups('groups').subscribe(
      async resdata => {
                const res = resdata;
                if(res){
                  localStorage.setItem('groupId', res[0].id);
                }
        }, async (error) => {
          console.log("error occured")
        });
  }

  scrollTo(elem: string) {
    console.log(this.scrollDispatcher.scrollContainers);
    this.scrollDispatcher.getAncestorScrollContainers(this.elem)[0].scrollTo({
      top: this[elem].nativeElement.offsetTop - 24,
      behavior: 'smooth'
    });
  }

  showForm(element: string){
    debugger;
    this.showIndividualForm = false;
    this.showVesselForm = false;
    this.showOrganizationForm = false;
    this.showUnspecifiedForm = false;
    switch(element){
      case 'individual':
        return  this.showIndividualForm = true;
      case 'vessel':
        return  this.showVesselForm = true;
      case 'organization':
        return  this.showOrganizationForm = true;
      case 'unspecified':
        return  this.showUnspecifiedForm = true;
      default:
        return ;
    }
  }
}
