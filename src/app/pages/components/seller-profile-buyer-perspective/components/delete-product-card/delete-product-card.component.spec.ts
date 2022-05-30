import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductCardComponent } from './delete-product-card.component';

describe('DeleteProductCardComponent', () => {
  let component: DeleteProductCardComponent;
  let fixture: ComponentFixture<DeleteProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
