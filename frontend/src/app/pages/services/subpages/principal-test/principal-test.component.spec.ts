import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalTestComponent } from './principal-test.component';

describe('PrincipalTestComponent', () => {
  let component: PrincipalTestComponent;
  let fixture: ComponentFixture<PrincipalTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
