import { TabTwoCompComponent } from './tab-two-comp/tab-two-comp.component';
import { TabOneCompComponent } from './tab-one-comp/tab-one-comp.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  types = [TabOneCompComponent, TabTwoCompComponent];
}
