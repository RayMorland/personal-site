import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLinkOneComponent } from './project-link-one.component';

describe('ProjectLinkOneComponent', () => {
  let component: ProjectLinkOneComponent;
  let fixture: ComponentFixture<ProjectLinkOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectLinkOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLinkOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
