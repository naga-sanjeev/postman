import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorytabComponent } from './historytab.component';

describe('HistorytabComponent', () => {
  let component: HistorytabComponent;
  let fixture: ComponentFixture<HistorytabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorytabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorytabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
