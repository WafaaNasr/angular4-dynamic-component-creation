import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTwoCompComponent } from './tab-two-comp.component';

describe('TabTwoCompComponent', () => {
  let component: TabTwoCompComponent;
  let fixture: ComponentFixture<TabTwoCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTwoCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTwoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
