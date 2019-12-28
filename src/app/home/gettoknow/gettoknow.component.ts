import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gettoknow',
  templateUrl: './gettoknow.component.html',
  styleUrls: ['./gettoknow.component.less']
})
export class GettoknowComponent implements OnInit {
  @Input() link: string;
  constructor() { }

  ngOnInit() {
  }

}
