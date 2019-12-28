import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrls: ['./ford.component.less']
})
export class FordComponent implements OnInit {
  @Input() link: string;
  constructor() { }

  ngOnInit() {
  }

}
