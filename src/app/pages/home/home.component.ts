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
  showProjectHeader = false;
  showInfoContent = false;
  @Input() project: any;
  @ViewChild("showProject", { static: false })
  showProject: ElementRef<HTMLElement>;
  @ViewChild("showInfo", { static: false })
  showInfo: ElementRef<HTMLElement>;
  @HostListener("window:scroll", ["$event"]) onScroll(event: any) {
    if (
      this.showInfo.nativeElement.getBoundingClientRect().y <=
      window.innerHeight * 0.6
      //   &&
      // this.showInfo.nativeElement.getBoundingClientRect().y >
      //   -0.2 * window.innerHeight
    ) {
      this.showInfoContent = true;
    } else this.showInfoContent = false;
    if (
      this.showProject.nativeElement.getBoundingClientRect().y <=
      window.innerHeight * 0.4
    ) {
      this.showProjectHeader = true;
    }
  }

  constructor(
    private blogpostService: BlogpostService,
    private projectsService: ProjectService
  ) {}

  ngOnInit(): void {
    this.blogpostService.GetBlogposts().subscribe((res) => {
      this.blogposts = res;
    });
    this.projectsService.GetProjects().subscribe((res) => {
      this.projects = res;
    });
  }
}
