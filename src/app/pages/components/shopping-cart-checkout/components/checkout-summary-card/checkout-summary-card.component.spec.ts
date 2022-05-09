import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSummaryCardComponent } from './checkout-summary-card.component';

describe('CheckoutSummaryCardComponent', () => {
  let component: CheckoutSummaryCardComponent;
  let fixture: ComponentFixture<CheckoutSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutSummaryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
