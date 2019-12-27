import { Component, OnInit, Input } from '@angular/core';
import { Stat } from './stat.model';
@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.less']
})
export class ImpactComponent implements OnInit {
  @Input() stats: [string[][]];
  constructor() { }

  ngOnInit() {
  }

}
