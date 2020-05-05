import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesummeryComponent } from './casesummery.component';

describe('CasesummeryComponent', () => {
  let component: CasesummeryComponent;
  let fixture: ComponentFixture<CasesummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CasesummeryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
