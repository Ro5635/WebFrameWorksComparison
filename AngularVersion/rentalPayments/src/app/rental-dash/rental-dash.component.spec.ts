import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDashComponent } from './rental-dash.component';

describe('RentalDashComponent', () => {
  let component: RentalDashComponent;
  let fixture: ComponentFixture<RentalDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
