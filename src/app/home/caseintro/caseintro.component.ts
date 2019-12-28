import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-caseintro',
  templateUrl: './caseintro.component.html',
  styleUrls: ['./caseintro.component.less']
})
export class CaseintroComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() company: string;
  @Input() projectapproach: string;
  @Input() roles: string[];
  
  constructor() { }

  ngOnInit() {
  }

}
