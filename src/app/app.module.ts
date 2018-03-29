import { TabTwoCompComponent } from './tab-two-comp/tab-two-comp.component';
import { TabOneCompComponent } from './tab-one-comp/tab-one-comp.component';
import { DclWrapper } from './dcl-wrapper';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
imports: [ BrowserModule ],
  declarations: [ AppComponent, DclWrapper, TabsComponent, TabOneCompComponent, TabTwoCompComponent],
  entryComponents: [TabOneCompComponent, TabTwoCompComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
