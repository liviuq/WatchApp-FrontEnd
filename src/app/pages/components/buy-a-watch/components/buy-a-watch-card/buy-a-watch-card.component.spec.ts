import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAWatchCardComponent } from './buy-a-watch-card.component';

describe('BuyAWatchCardComponent', () => {
  let component: BuyAWatchCardComponent;
  let fixture: ComponentFixture<BuyAWatchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyAWatchCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyAWatchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
