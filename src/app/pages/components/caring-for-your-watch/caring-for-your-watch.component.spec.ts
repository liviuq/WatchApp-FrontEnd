import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaringForYourWatchComponent } from './caring-for-your-watch.component';

describe('CaringForYourWatchComponent', () => {
  let component: CaringForYourWatchComponent;
  let fixture: ComponentFixture<CaringForYourWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaringForYourWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaringForYourWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
