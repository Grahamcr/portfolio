import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imgexploder',
  templateUrl: './imgexploder.component.html',
  styleUrls: ['./imgexploder.component.less']
})
export class ImgexploderComponent implements OnInit {
  @Input() imgsrc: string;
  showoverlay = false;
  constructor() { }

  ngOnInit() {
    
  }

  open() {
    this.showoverlay = true;
    document.body.classList.toggle('noscroll');
  }
  close() {
    this.showoverlay = false;
    document.body.classList.toggle('noscroll');
  }

}
