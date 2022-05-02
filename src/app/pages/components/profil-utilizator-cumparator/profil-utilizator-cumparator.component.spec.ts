import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilUtilizatorCumparatorComponent } from './profil-utilizator-cumparator.component';

describe('ProfilUtilizatorCumparatorComponent', () => {
  let component: ProfilUtilizatorCumparatorComponent;
  let fixture: ComponentFixture<ProfilUtilizatorCumparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilUtilizatorCumparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilUtilizatorCumparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
