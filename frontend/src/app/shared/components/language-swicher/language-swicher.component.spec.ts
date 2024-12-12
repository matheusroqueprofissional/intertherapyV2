import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSwicherComponent } from './language-swicher.component';

describe('LanguageSwicherComponent', () => {
  let component: LanguageSwicherComponent;
  let fixture: ComponentFixture<LanguageSwicherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageSwicherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSwicherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
