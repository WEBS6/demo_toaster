import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastModalComponent } from './toast-modal.component';

describe('ToastModalComponent', () => {
  let component: ToastModalComponent;
  let fixture: ComponentFixture<ToastModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
