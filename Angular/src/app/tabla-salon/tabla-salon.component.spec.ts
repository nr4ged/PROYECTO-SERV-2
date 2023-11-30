import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSalonComponent } from './tabla-salon.component';

describe('TablaSalonComponent', () => {
  let component: TablaSalonComponent;
  let fixture: ComponentFixture<TablaSalonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaSalonComponent]
    });
    fixture = TestBed.createComponent(TablaSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
