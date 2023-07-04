import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedcarbugetmenuComponent } from './usedcarbugetmenu.component';

describe('UsedcarbugetmenuComponent', () => {
  let component: UsedcarbugetmenuComponent;
  let fixture: ComponentFixture<UsedcarbugetmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedcarbugetmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedcarbugetmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
