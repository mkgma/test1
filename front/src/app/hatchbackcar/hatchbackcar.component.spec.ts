import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatchbackcarComponent } from './hatchbackcar.component';

describe('HatchbackcarComponent', () => {
  let component: HatchbackcarComponent;
  let fixture: ComponentFixture<HatchbackcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HatchbackcarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HatchbackcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
