import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOneCompComponent } from './tab-one-comp.component';

describe('TabOneCompComponent', () => {
  let component: TabOneCompComponent;
  let fixture: ComponentFixture<TabOneCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabOneCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabOneCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
