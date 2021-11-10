import { Component, OnInit } from "@angular/core";
import { forkJoin } from "rxjs";
import { rmAnimations } from "src/app/shared/animations/rm-animations";
import { ProjectService } from "src/app/shared/services/project.service";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.sass"],
  animations: [rmAnimations],
})
export class PortfolioComponent implements OnInit {
  projects: any;
  values: any;
  secondaryProjects: any;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.values = forkJoin([
      this.projectService.GetProjects(),
      this.projectService.GetSecondaryProjects(),
    ]).subscribe(([projects, secondaryProjects]) => {
      this.projects = projects;
      this.secondaryProjects = secondaryProjects;
      console.log(this.projects, this.secondaryProjects);
    });
  }
}
