import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollbarDirective } from '../../../../../@vex/components/scrollbar/scrollbar.directive';
import { LayoutService } from '../../../../../@vex/services/layout.service';

import { KeydataComponent } from './components/keydata/keydata.component';



import { SourcesComponent } from './components/sources/sources.component';
import { KeywordsComponent } from './components/keywords/keywords.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import { FurtherinformationComponent } from './components/furtherinformation/furtherinformation.component';

import { ScrollDispatcher } from '@angular/cdk/overlay';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { stagger80ms } from '../../../../../@vex/animations/stagger.animation';

@Component({
  selector: 'vex-casedetails-overview',
  templateUrl: './casedetails-overview.component.html',
  styleUrls: ['./casedetails-overview.component.scss'],
  animations: [
    stagger80ms,
    fadeInRight400ms,
    fadeInUp400ms
  ]
})
export class CasedetailsOverviewComponent implements OnInit {

  menuWidth = '250px';
  @ViewChild(KeydataComponent, { read: ElementRef, static: true }) private keydata: ElementRef;
  @ViewChild(FurtherinformationComponent, { read: ElementRef, static: true }) private furtherinformation: ElementRef;

  @ViewChild(KeywordsComponent, { read: ElementRef, static: true }) private keywords: ElementRef;
  @ViewChild(ConnectionsComponent, { read: ElementRef, static: true }) private connections: ElementRef;
  @ViewChild(SourcesComponent, { read: ElementRef, static: true }) private source: ElementRef;

  

  @ViewChild('contentScroll', { read: ScrollbarDirective, static: false }) private contentScroll: ScrollbarDirective;

  constructor(private layoutService: LayoutService,
              private scrollDispatcher: ScrollDispatcher,
              private elem: ElementRef) {
  }

  ngOnInit() {
  }

  scrollTo(elem: string) {
    console.log(this.scrollDispatcher.scrollContainers);
    this.scrollDispatcher.getAncestorScrollContainers(this.elem)[0].scrollTo({
      top: this[elem].nativeElement.offsetTop - 24,
      behavior: 'smooth'
    });
  }
}
