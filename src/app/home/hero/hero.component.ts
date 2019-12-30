import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.less']
})
export class HeroComponent implements OnInit {

  @Input() title: string;
  @Input() sub: string;
  @Input() case: string;

  constructor() { }

  ngOnInit() {
  }

  scroll() {
    let element = document.getElementById('target');
    element.scrollIntoView({behavior: 'smooth'});
  }

}
