import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveBoxComponent } from './interactive-box.component';

describe('InteractiveBoxComponent', () => {
  let component: InteractiveBoxComponent;
  let fixture: ComponentFixture<InteractiveBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteractiveBoxComponent]
    });
    fixture = TestBed.createComponent(InteractiveBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
