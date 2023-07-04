import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularbrandComponent } from './popularbrand.component';

describe('PopularbrandComponent', () => {
  let component: PopularbrandComponent;
  let fixture: ComponentFixture<PopularbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularbrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
