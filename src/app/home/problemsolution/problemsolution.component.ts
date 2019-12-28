import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-problemsolution',
  templateUrl: './problemsolution.component.html',
  styleUrls: ['./problemsolution.component.less']
})
export class ProblemsolutionComponent implements OnInit {
  @Input() solution: string;
  @Input() problem: string;
  @Input() team: string;

  constructor() { }

  ngOnInit() {
  }

}
