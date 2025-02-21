import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonoaudiologiaComponent } from './fonoaudiologia.component';

describe('FonoaudiologiaComponent', () => {
  let component: FonoaudiologiaComponent;
  let fixture: ComponentFixture<FonoaudiologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FonoaudiologiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FonoaudiologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
