import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPerCountryComponent } from './history-per-country.component';

describe('HistoryPerCountryComponent', () => {
  let component: HistoryPerCountryComponent;
  let fixture: ComponentFixture<HistoryPerCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPerCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPerCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
