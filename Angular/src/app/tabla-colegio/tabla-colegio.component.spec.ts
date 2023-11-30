import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaColegioComponent } from './tabla-colegio.component';

describe('TablaColegioComponent', () => {
  let component: TablaColegioComponent;
  let fixture: ComponentFixture<TablaColegioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaColegioComponent]
    });
    fixture = TestBed.createComponent(TablaColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
