import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterheadComponent } from './footerhead.component';

describe('FooterheadComponent', () => {
  let component: FooterheadComponent;
  let fixture: ComponentFixture<FooterheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
