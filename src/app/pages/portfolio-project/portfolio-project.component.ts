import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { rmAnimations } from "src/app/shared/animations/rm-animations";
import Project from "src/app/shared/models/project.model";
import { BlogpostService } from "src/app/shared/services/blogpost.service";
import { ProjectService } from "src/app/shared/services/project.service";

@Component({
  selector: "app-portfolio-project",
  templateUrl: "./portfolio-project.component.html",
  styleUrls: ["./portfolio-project.component.sass"],
  animations: [rmAnimations],
})
export class PortfolioProjectComponent implements OnInit {
  project: any = { title: "", services: "", slug: "", description: "" };
  images: any = [];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params["id"];
      console.log("Url Id: ", id);
      this.projectService.GetProject(id).subscribe((res) => {
        console.log(res[0]);
        this.project = res[0];
        this.images = this.project.primary_image;
        console.log(this.images[0].url);
      });
    });
  }
}
