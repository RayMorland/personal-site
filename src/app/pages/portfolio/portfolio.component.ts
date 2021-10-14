import { Component, OnInit } from '@angular/core';
import { rmAnimations } from 'src/app/shared/animations/rm-animations';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
  animations: [rmAnimations]
})
export class PortfolioComponent implements OnInit {
  projects: any;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.GetProjects().subscribe(res => {
      this.projects = res;
    });
  }

}
