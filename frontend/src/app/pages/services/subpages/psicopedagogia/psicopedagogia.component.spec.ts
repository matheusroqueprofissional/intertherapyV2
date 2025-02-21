import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicopedagogiaComponent } from './psicopedagogia.component';

describe('PsicopedagogiaComponent', () => {
  let component: PsicopedagogiaComponent;
  let fixture: ComponentFixture<PsicopedagogiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsicopedagogiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsicopedagogiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
