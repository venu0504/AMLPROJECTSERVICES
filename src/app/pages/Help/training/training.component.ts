import { Component, OnInit } from '@angular/core';
import theme from '../../../../@vex/utils/tailwindcss';

@Component({
  selector: 'vex-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  theme = theme;
  ngOnInit() {
  }

}
