import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dbgettoknow',
  templateUrl: './dbgettoknow.component.html',
  styleUrls: ['./dbgettoknow.component.less']
})
export class DbgettoknowComponent implements OnInit {
  @Input() link: string;
  constructor() { }

  ngOnInit() {
  }

}
