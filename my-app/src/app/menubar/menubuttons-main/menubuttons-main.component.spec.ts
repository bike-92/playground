import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubuttonsMainComponent } from './menubuttons-main.component';

describe('MenubuttonsMainComponent', () => {
  let component: MenubuttonsMainComponent;
  let fixture: ComponentFixture<MenubuttonsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenubuttonsMainComponent]
    });
    fixture = TestBed.createComponent(MenubuttonsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
