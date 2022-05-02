import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddproductComponent } from './form-addproduct.component';

describe('FormAddproductComponent', () => {
  let component: FormAddproductComponent;
  let fixture: ComponentFixture<FormAddproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
