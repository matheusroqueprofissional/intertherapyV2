import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiotherapyComponent } from './physiotherapy.component';

describe('PhysiotherapyComponent', () => {
  let component: PhysiotherapyComponent;
  let fixture: ComponentFixture<PhysiotherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysiotherapyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysiotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
