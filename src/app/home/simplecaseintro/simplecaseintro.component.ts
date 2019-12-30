import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simplecaseintro',
  templateUrl: './simplecaseintro.component.html',
  styleUrls: ['./simplecaseintro.component.less']
})
export class SimplecaseintroComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  constructor() { }

  ngOnInit() {
  }

}
