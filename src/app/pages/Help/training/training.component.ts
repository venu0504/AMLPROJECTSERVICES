import { Component, OnInit } from '@angular/core';
import theme from '../../../../@vex/utils/tailwindcss';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';


@Component({
  selector: 'vex-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  theme = theme;
  icMoreVert =icMoreVert;
  ngOnInit() {
  }

}
