import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDirectorComponent } from './form-director.component';

describe('FormDirectorComponent', () => {
  let component: FormDirectorComponent;
  let fixture: ComponentFixture<FormDirectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDirectorComponent]
    });
    fixture = TestBed.createComponent(FormDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
