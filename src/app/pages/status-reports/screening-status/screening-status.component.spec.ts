import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningstatusComponent } from './screening-status.component';

describe('ScreeningstatusComponent', () => {
  let component: ScreeningstatusComponent;
  let fixture: ComponentFixture<ScreeningstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScreeningstatusComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
