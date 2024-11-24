import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendImagesComponent } from './send-images.component';

describe('SendImagesComponent', () => {
  let component: SendImagesComponent;
  let fixture: ComponentFixture<SendImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
