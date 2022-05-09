import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerProfileBuyerPerspectiveComponent } from './seller-profile-buyer-perspective.component';

describe('SellerProfileBuyerPerspectiveComponent', () => {
  let component: SellerProfileBuyerPerspectiveComponent;
  let fixture: ComponentFixture<SellerProfileBuyerPerspectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerProfileBuyerPerspectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerProfileBuyerPerspectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
