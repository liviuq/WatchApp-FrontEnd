import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographingAWatchComponent } from './photographing-a-watch.component';

describe('PhotographingAWatchComponent', () => {
  let component: PhotographingAWatchComponent;
  let fixture: ComponentFixture<PhotographingAWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographingAWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographingAWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
