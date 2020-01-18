import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportstatusComponent } from './export-status.component';

describe('ExportstatusComponent', () => {
  let component: ExportstatusComponent;
  let fixture: ComponentFixture<ExportstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExportstatusComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
