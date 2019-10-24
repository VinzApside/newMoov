import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneParkComponent } from './one-park.component';

describe('OneParkComponent', () => {
  let component: OneParkComponent;
  let fixture: ComponentFixture<OneParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
