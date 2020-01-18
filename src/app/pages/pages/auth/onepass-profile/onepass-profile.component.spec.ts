import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepassProfileComponent } from './onepass-profile.component';

describe('OnepassProfileComponent', () => {
  let component: OnepassProfileComponent;
  let fixture: ComponentFixture<OnepassProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnepassProfileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnepassProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
