import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestcarComponent } from './latestcar.component';

describe('LatestcarComponent', () => {
  let component: LatestcarComponent;
  let fixture: ComponentFixture<LatestcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestcarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
