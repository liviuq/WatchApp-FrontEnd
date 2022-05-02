import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAWatchComponent } from './buy-a-watch.component';

describe('BuyAWatchComponent', () => {
  let component: BuyAWatchComponent;
  let fixture: ComponentFixture<BuyAWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyAWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyAWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
