import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerProfileProductCardComponent } from './seller-profile-product-card.component';

describe('SellerProfileProductCardComponent', () => {
  let component: SellerProfileProductCardComponent;
  let fixture: ComponentFixture<SellerProfileProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerProfileProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerProfileProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
