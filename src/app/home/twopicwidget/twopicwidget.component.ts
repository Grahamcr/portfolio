import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twopicwidget',
  templateUrl: './twopicwidget.component.html',
  styleUrls: ['./twopicwidget.component.less']
})
export class TwopicwidgetComponent implements OnInit {
@Input() imgone: string;
@Input() imgtwo: string;
  constructor() { }

  ngOnInit() {
  }

}
