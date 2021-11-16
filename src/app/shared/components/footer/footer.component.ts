import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { filter } from "rxjs/operators";
import { Event } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.sass"],
})
export class FooterComponent implements OnInit, AfterViewInit {
  // private routerEventSub: Subscription;
  windowWidth: any;
  @ViewChild("footer") footer: any;
  @HostListener("window:resize", ["$event"]) onResize(): void {
    this.windowWidth = window.innerWidth;
  }
  @HostListener("window:scroll", ["$event"]) onScroll(event: any) {
    if (
      this.element.nativeElement.getBoundingClientRect().y <=
      window.innerHeight * 0.75
    ) {
      this.footer.nativeElement.style.opacity = 1;
      this.footer.nativeElement.style.transform = "translateY(0px)";
    }
  }

  public backgroundColor: string = "none";
  routerEventSub: any;
  route: any;
  color: any;

  constructor(private router: Router, private element: ElementRef) {
    this.routerEventSub = router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((routeChange: any) => {
        console.log(routeChange);
        this.changeColor(routeChange);
        if (this.footer) {
          this.footer.nativeElement.style.opacity = 0;
          this.footer.nativeElement.style.transform = "translateY(100px)";
          this.footer.nativeElement.style.transition =
            "opacity 1s ease, transform 1s ease";
        }
      });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.footer);
    this.footer.nativeElement.style.opacity = 0;
    this.footer.nativeElement.style.transform = "translateY(100px)";
    this.footer.nativeElement.style.transition =
      "opacity 1s ease, transform 1s ease";
  }

  changeColor(routeChange: any) {
    if (
      routeChange.url.split("/")[1] === "work" &&
      routeChange.url.split("/").length > 2
    ) {
      this.color = "#3f4238";
    } else {
      this.color = "#ffe8d6";
    }
  }

  hovered(e: any) {
    if (e.type === "mouseenter") {
      e.target.style.borderBottomColor = this.color;
    } else {
      e.target.style.borderBottomColor = "rgba(0,0,0,0)";
    }
  }
}
