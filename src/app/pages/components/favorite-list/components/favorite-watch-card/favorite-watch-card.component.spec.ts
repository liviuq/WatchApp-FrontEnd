import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteWatchCardComponent } from './favorite-watch-card.component';

describe('FavoriteWatchCardComponent', () => {
  let component: FavoriteWatchCardComponent;
  let fixture: ComponentFixture<FavoriteWatchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteWatchCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteWatchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
