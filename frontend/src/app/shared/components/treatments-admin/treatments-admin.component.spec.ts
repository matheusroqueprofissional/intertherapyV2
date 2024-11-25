import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentsAdminComponent } from './treatments-admin.component';

describe('TreatmentsAdminComponent', () => {
  let component: TreatmentsAdminComponent;
  let fixture: ComponentFixture<TreatmentsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreatmentsAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
