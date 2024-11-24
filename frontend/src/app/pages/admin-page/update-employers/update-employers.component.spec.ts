import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployersComponent } from './update-employers.component';

describe('UpdateEmployersComponent', () => {
  let component: UpdateEmployersComponent;
  let fixture: ComponentFixture<UpdateEmployersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEmployersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
