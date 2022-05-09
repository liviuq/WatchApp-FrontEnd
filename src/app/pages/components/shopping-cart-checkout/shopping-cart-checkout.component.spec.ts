import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartCheckoutComponent } from './shopping-cart-checkout.component';

describe('ShoppingCartCheckoutComponent', () => {
  let component: ShoppingCartCheckoutComponent;
  let fixture: ComponentFixture<ShoppingCartCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
