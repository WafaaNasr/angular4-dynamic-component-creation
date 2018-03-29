import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() tabs;
  constructor() { }

  ngOnInit() {

  }

}