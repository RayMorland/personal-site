import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryProjectComponent } from './secondary-project.component';

describe('SecondaryProjectComponent', () => {
  let component: SecondaryProjectComponent;
  let fixture: ComponentFixture<SecondaryProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
