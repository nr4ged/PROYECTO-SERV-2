import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSalonActComponent } from './form-salon-act.component';

describe('FormSalonActComponent', () => {
  let component: FormSalonActComponent;
  let fixture: ComponentFixture<FormSalonActComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSalonActComponent]
    });
    fixture = TestBed.createComponent(FormSalonActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
