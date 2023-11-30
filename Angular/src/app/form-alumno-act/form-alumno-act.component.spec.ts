import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlumnoActComponent } from './form-alumno-act.component';

describe('FormAlumnoActComponent', () => {
  let component: FormAlumnoActComponent;
  let fixture: ComponentFixture<FormAlumnoActComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAlumnoActComponent]
    });
    fixture = TestBed.createComponent(FormAlumnoActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
