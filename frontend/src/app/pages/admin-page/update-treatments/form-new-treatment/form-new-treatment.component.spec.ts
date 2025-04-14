import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewTreatmentComponent } from './form-new-treatment.component';

describe('FormNewTreatmentComponent', () => {
  let component: FormNewTreatmentComponent;
  let fixture: ComponentFixture<FormNewTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNewTreatmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
