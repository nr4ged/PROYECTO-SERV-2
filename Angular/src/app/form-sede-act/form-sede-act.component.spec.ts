import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSedeActComponent } from './form-sede-act.component';

describe('FormSedeActComponent', () => {
  let component: FormSedeActComponent;
  let fixture: ComponentFixture<FormSedeActComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSedeActComponent]
    });
    fixture = TestBed.createComponent(FormSedeActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
