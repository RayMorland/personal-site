import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import {
  sequence,
  trigger,
  animate,
  style,
  group,
  query,
  transition,
  animateChild,
  state,
  animation,
  useAnimation,
  stagger,
} from "@angular/animations";
import { rmAnimations } from "src/app/shared/animations/rm-animations";
import { BlogpostService } from "src/app/shared/services/blogpost.service";
import { ProjectService } from "src/app/shared/services/project.service";

interface Blogpost {
  title: string;
  content: string;
  subtitle: string;
  slug: string;
}

interface Project {
  title: string;
  services: string;
  slug: string;
  description: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
  animations: [
    rmAnimations,
    trigger("fadeInOut", [
      state(
        "0",
        style({
          opacity: 0,
        })
      ),
      state(
        "1",
        style({
          opacity: 1,
        })
      ),
      transition("0 => 1", animate("500ms")),
      transition("1 => 0", animate("500ms")),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  public blogposts: Blogpost[] = [];
  public projects: Project[] = [];
  @Input() project: any;

  constructor(private projectsService: ProjectService) {}

  ngOnInit(): void {
    this.projectsService.GetProjects().subscribe((res) => {
      this.projects = res;
    });
  }
}
