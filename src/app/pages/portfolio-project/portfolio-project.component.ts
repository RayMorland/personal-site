import { Component, HostListener, OnInit } from "@angular/core";
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
  image: any;
  images: any = [];
  windowWidth: any;
  @HostListener("window:resize") resize() {
    this.windowWidth = window.innerWidth;
  }

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params["id"];
      console.log("Url Id: ", id);
      this.projectService.GetProject(id).subscribe((res) => {
        this.project = res[0];
        this.image = this.project.primary_image;
        this.images = this.project.gallery.slice(1, 5);
        console.log(this.project);
      });
    });
  }

  loaded(loaded: boolean) {
    console.log(loaded);
  }
}
