import { Component, OnInit } from '@angular/core';
import theme from '../../../../@vex/utils/tailwindcss';

@Component({
  selector: 'vex-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  theme = theme;
  ngOnInit() {
  }

}
