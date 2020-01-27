import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseauditComponent } from './caseaudit.component';

describe('CaseauditComponent', () => {
  let component: CaseauditComponent;
  let fixture: ComponentFixture<CaseauditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaseauditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseauditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
