import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllParkComponent } from './all-park.component';

describe('AllParkComponent', () => {
  let component: AllParkComponent;
  let fixture: ComponentFixture<AllParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
