import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDirectorComponent } from './tabla-director.component';

describe('TablaDirectorComponent', () => {
  let component: TablaDirectorComponent;
  let fixture: ComponentFixture<TablaDirectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaDirectorComponent]
    });
    fixture = TestBed.createComponent(TablaDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
