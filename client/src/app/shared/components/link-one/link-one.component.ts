import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-one',
  templateUrl: './link-one.component.html',
  styleUrls: ['./link-one.component.sass']
})
export class LinkOneComponent implements OnInit {
  @Input() linkText = '';

  constructor() { }

  ngOnInit(): void {
  }

}
