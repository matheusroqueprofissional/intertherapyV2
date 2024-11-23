import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychopedagogyComponent } from './psychopedagogy.component';

describe('PsychopedagogyComponent', () => {
  let component: PsychopedagogyComponent;
  let fixture: ComponentFixture<PsychopedagogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsychopedagogyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsychopedagogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
