import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputOneComponent } from './form-input-one.component';

describe('FormInputOneComponent', () => {
  let component: FormInputOneComponent;
  let fixture: ComponentFixture<FormInputOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
