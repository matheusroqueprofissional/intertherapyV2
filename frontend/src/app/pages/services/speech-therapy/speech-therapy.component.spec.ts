import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechTherapyComponent } from './speech-therapy.component';

describe('SpeechTherapyComponent', () => {
  let component: SpeechTherapyComponent;
  let fixture: ComponentFixture<SpeechTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeechTherapyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeechTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
