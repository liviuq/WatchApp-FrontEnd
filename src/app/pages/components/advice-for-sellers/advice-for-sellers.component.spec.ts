import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceForSellersComponent } from './advice-for-sellers.component';

describe('AdviceForSellersComponent', () => {
  let component: AdviceForSellersComponent;
  let fixture: ComponentFixture<AdviceForSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceForSellersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceForSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
