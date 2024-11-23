import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationalTherapyComponent } from './occupational-therapy.component';

describe('OccupationalTherapyComponent', () => {
  let component: OccupationalTherapyComponent;
  let fixture: ComponentFixture<OccupationalTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OccupationalTherapyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupationalTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
