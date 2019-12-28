import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-largediamond',
  templateUrl: './largediamond.component.html',
  styleUrls: ['./largediamond.component.less']
})
export class LargediamondComponent implements OnInit {

  @Input() pic: string;
  @Input() title: string;
  @Input() description: string;
  @Input() bwimage: string;
  @Input() colorimage: string;
  @Input() caselink: string;
  constructor() { }

  showColor = false;


  ngOnInit() {

  }

  mouseEnter() {
    this.showColor = true;
  }
  mouseLeave() {
    this.showColor = false;
  }
}
