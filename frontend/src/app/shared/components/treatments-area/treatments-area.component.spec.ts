import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentsAreaComponent } from './treatments-area.component';

describe('TreatmentsAreaComponent', () => {
  let component: TreatmentsAreaComponent;
  let fixture: ComponentFixture<TreatmentsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreatmentsAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
