import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOneplusProfileComponent } from './update-oneplus-profile.component';

describe('UpdateOneplusProfileComponent', () => {
  let component: UpdateOneplusProfileComponent;
  let fixture: ComponentFixture<UpdateOneplusProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateOneplusProfileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOneplusProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
