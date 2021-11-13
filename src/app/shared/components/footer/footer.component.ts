import { Component, HostListener, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { filter } from "rxjs/operators";
import { Event } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.sass"],
})
export class FooterComponent implements OnInit {
  // private routerEventSub: Subscription;
  windowWidth: any;
  @HostListener("window:resize", ["$event"]) onResize(): void {
    this.windowWidth = window.innerWidth;
  }

  public backgroundColor: string = "none";
  routerEventSub: any;
  route: any;
  color: any;

  constructor(private router: Router) {
    this.routerEventSub = router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((routeChange: any) => {
        console.log(routeChange);
        this.changeColor(routeChange);
      });
  }

  ngOnInit(): void {}

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
