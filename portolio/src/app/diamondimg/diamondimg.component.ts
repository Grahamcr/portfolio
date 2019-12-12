import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diamondimg',
  templateUrl: './diamondimg.component.html',
  styleUrls: ['./diamondimg.component.less']
})
export class DiamondimgComponent implements OnInit {

  constructor() { }
  // findit image
  finditbw = 'assets/images/findit_bw.png';
  finditc = 'assets/images/findit.png';
  showColor = false;
  title = 'Error';
  description = 'Error Getting Description';
  ngOnInit() {
  }

  mouseEnter() {
    this.showColor = true;
  }
  mouseLeave() {
    this.showColor = false;
  }

  getImgBWSrc(picName) {
    switch(picName) {
      case 'findit': {
        this.title = 'FindIT Search';
        this.description = 'How might change search at GE?';
        return this.finditbw;
      }
    }
  }

  getImgCISrc(picName) {
    switch(picName) {
      case 'findit': {
        return this.finditc;
      }
    }
  }

}
