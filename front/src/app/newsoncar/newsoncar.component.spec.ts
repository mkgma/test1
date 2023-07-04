import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsoncarComponent } from './newsoncar.component';

describe('NewsoncarComponent', () => {
  let component: NewsoncarComponent;
  let fixture: ComponentFixture<NewsoncarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsoncarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsoncarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
