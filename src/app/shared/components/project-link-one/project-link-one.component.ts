import { keyframes, transition } from "@angular/animations";
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { rmAnimations } from "../../animations/rm-animations";
import Project from "../../models/project.model";
import { ProjectService } from "../../services/project.service";
import {
  sequence,
  trigger,
  animate,
  style,
  group,
  query,
  animateChild,
  state,
  animation,
  useAnimation,
  stagger,
} from "@angular/animations";
import { Router } from "@angular/router";

@Component({
  selector: "app-project-link-one",
  templateUrl: "./project-link-one.component.html",
  styleUrls: ["./project-link-one.component.sass"],
  animations: [
    rmAnimations,
    trigger("navigating", [
      state(
        "home",
        style({
          opacity: 1,
        })
      ),
      state(
        "work",
        style({
          opacity: 0,
        })
      ),
      transition("home => work", [animate("500ms")]),
    ]),
    trigger("navigating2", [
      state(
        "home",
        style({
          left: "5vw",
        })
      ),
      state(
        "work",
        style({
          left: "0vw",
        })
      ),
      transition("home => work", [animate("500ms")]),
    ]),
    trigger("navigating3", [
      state(
        "home",
        style({
          transform: "translateX(0%)",
        })
      ),
      state(
        "work",
        style({
          transform: "translateX(50%)",
        })
      ),
      transition("home => work", [animate("500ms")]),
    ]),
  ],
})
export class ProjectLinkOneComponent implements OnInit {
  show = false;
  scrolling = false;
  switching = false;
  windowWidth = window.innerWidth;
  @Input() project: any;
  @ViewChild("projectLink") link: ElementRef<HTMLElement>;
  @HostListener("window:resize", ["$event"]) resize(event: any) {
    console.log(event, window.innerWidth);
    this.windowWidth = window.innerWidth;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.project);
    window.scrollTo(0, 0);
  }

  navigate(e: any) {
    this.router.navigate(["/work/" + this.project.slug]);
  }
}
