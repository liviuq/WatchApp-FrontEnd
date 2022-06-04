import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginConditionComponent } from './login-condition.component';

describe('LoginConditionComponent', () => {
  let component: LoginConditionComponent;
  let fixture: ComponentFixture<LoginConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
