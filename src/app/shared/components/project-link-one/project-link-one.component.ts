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

@Component({
  selector: "app-project-link-one",
  templateUrl: "./project-link-one.component.html",
  styleUrls: ["./project-link-one.component.sass"],
  animations: [rmAnimations],
})
export class ProjectLinkOneComponent implements OnInit {
  show = false;
  scrolling = false;
  @Input() project: any;
  @ViewChild("projectLink") link: ElementRef<HTMLElement>;
  @HostListener("window:scroll", ["$event"]) onScroll(event: any) {
    if (
      this.link.nativeElement.getBoundingClientRect().y <=
      window.innerHeight / 2
    ) {
      this.show = true;
      // this.scrolling = true;
      // let timeout = setTimeout(() => {
      //   this.scrolling = false;
      // }, 2000);
      // clearTimeout(timeout);
      // console.log(this.scrolling);
    }
    // else if (
    //   this.link.nativeElement.getBoundingClientRect().y >
    //   window.innerHeight / 2
    // ) {
    //   this.show = false;
    // }
  }

  constructor() {}

  ngOnInit(): void {
    console.log(this.project);
    window.scrollTo(0, 0);
  }
}
