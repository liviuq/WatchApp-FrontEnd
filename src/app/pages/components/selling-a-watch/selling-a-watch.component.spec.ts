import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingAWatchComponent } from './selling-a-watch.component';

describe('SellingAWatchComponent', () => {
  let component: SellingAWatchComponent;
  let fixture: ComponentFixture<SellingAWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingAWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingAWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
