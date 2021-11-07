import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"],
})
export class HeaderComponent implements OnInit {
  private routerEventSub: Subscription;
  public backgroundColor: string = "none";
  @ViewChild("header", { static: false })
  headerRef: ElementRef<HTMLElement>;

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
      console.log(this.headerRef);
      this.headerRef.nativeElement.style.color = "#3f4238 !important";
    } else {
      this.headerRef.nativeElement.style.color = "#ffe8d6";
    }
  }
}
