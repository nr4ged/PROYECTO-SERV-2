import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSalonComponent } from './form-salon.component';

describe('FormSalonComponent', () => {
  let component: FormSalonComponent;
  let fixture: ComponentFixture<FormSalonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSalonComponent]
    });
    fixture = TestBed.createComponent(FormSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
