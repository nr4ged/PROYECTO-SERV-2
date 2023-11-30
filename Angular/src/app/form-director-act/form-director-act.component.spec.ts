import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDirectorActComponent } from './form-director-act.component';

describe('FormDirectorActComponent', () => {
  let component: FormDirectorActComponent;
  let fixture: ComponentFixture<FormDirectorActComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDirectorActComponent]
    });
    fixture = TestBed.createComponent(FormDirectorActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
