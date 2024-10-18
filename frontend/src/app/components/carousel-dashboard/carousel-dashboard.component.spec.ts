import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDashboardComponent } from './carousel-dashboard.component';

describe('CarouselDashboardComponent', () => {
  let component: CarouselDashboardComponent;
  let fixture: ComponentFixture<CarouselDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
