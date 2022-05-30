import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectiaCumparatoruluiComponent } from './protectia-cumparatorului.component';

describe('ProtectiaCumparatoruluiComponent', () => {
  let component: ProtectiaCumparatoruluiComponent;
  let fixture: ComponentFixture<ProtectiaCumparatoruluiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectiaCumparatoruluiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectiaCumparatoruluiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
