import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedcarnearbyComponent } from './usedcarnearby.component';

describe('UsedcarnearbyComponent', () => {
  let component: UsedcarnearbyComponent;
  let fixture: ComponentFixture<UsedcarnearbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedcarnearbyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedcarnearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
