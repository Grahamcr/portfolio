import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-colordiamond',
  templateUrl: './colordiamond.component.html',
  styleUrls: ['./colordiamond.component.less']
})
export class ColordiamondComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() caselink: string;
  @Input() calltoaction: string;

  constructor() { }

  ngOnInit() {

  }

}
