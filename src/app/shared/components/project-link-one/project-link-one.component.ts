import { Component, Input, OnInit } from '@angular/core';
import Project from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-link-one',
  templateUrl: './project-link-one.component.html',
  styleUrls: ['./project-link-one.component.sass'],
})
export class ProjectLinkOneComponent implements OnInit {
  @Input() project = new Project();

  constructor() {}

  ngOnInit(): void {
    console.log(this.project);
  }
}
