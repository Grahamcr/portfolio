import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diamondimg',
  templateUrl: './diamondimg.component.html',
  styleUrls: ['./diamondimg.component.less']
})
export class DiamondimgComponent implements OnInit {

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
