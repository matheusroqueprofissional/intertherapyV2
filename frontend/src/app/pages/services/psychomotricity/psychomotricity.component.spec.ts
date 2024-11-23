import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychomotricityComponent } from './psychomotricity.component';

describe('PsychomotricityComponent', () => {
  let component: PsychomotricityComponent;
  let fixture: ComponentFixture<PsychomotricityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsychomotricityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsychomotricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
