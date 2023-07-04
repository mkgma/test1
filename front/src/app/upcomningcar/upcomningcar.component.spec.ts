import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomningcarComponent } from './upcomningcar.component';

describe('UpcomningcarComponent', () => {
  let component: UpcomningcarComponent;
  let fixture: ComponentFixture<UpcomningcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomningcarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomningcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
