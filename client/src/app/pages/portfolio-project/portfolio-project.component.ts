import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rmAnimations } from 'src/app/shared/animations/rm-animations';
import { Project } from 'src/app/shared/models/project.model';
import { BlogpostService } from 'src/app/shared/services/blogpost.service';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.sass'],
  animations: [rmAnimations],
})
export class PortfolioProjectComponent implements OnInit {
  project: Project = { title: '', services: '', slug: '', description: '' };

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      console.log('Url Id: ', id);
      this.projectService
        .GetProject(id)
        .subscribe((res) => (this.project = res[0]));
    });
  }
}
