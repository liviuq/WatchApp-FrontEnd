import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturComodComponent } from './retur-comod.component';

describe('ReturComodComponent', () => {
  let component: ReturComodComponent;
  let fixture: ComponentFixture<ReturComodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturComodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturComodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
