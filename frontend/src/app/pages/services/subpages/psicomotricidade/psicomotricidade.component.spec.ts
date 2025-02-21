import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicomotricidadeComponent } from './psicomotricidade.component';

describe('PsicomotricidadeComponent', () => {
  let component: PsicomotricidadeComponent;
  let fixture: ComponentFixture<PsicomotricidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsicomotricidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsicomotricidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
