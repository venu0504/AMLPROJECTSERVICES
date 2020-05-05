import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasedetailsOverviewComponent } from './casedetails--overview.component';

describe('CasedetailsOverviewComponent', () => {
  let component: CasedetailsOverviewComponent;
  let fixture: ComponentFixture<CasedetailsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CasedetailsOverviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasedetailsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
