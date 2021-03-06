import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";
import { rmAnimations } from "../../animations/rm-animations";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"],
  animations: [rmAnimations],
})
export class HeaderComponent implements OnInit {
  private routerEventSub: Subscription;
  public backgroundColor: string = "none";
  @ViewChild("header", { static: false })
  headerRef: ElementRef<HTMLElement>;
  color: any = "#3f4238";
  menuOpen = false;

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
