import { Component, OnInit } from "@angular/core";
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

  public backgroundColor: string = "none";
  routerEventSub: any;
  route: any;

  constructor(private router: Router) {
    this.routerEventSub = router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((routeChange: any) => {
        console.log(routeChange);
        if (
          routeChange.url.split("/")[1] === "work" &&
          routeChange.url.split("/").length > 2
        ) {
          document.body.style.backgroundColor = "#ffe8d6";
          document.body.style.color = "#3f4238";
        } else {
          document.body.style.backgroundColor = "#3f4238";
          document.body.style.color = "#ffe8d6";
        }
      });
  }

  ngOnInit(): void {
    // this.route = this.router.url;
    // this.pickColor();
    // this.navEnd.subscribe((routeChange) => {
    //   this.route = routeChange.url;
    //   this.pickColor();
    // });
  }

  // pickColor(): void {
  //   if (this.route.startsWith('/work')) {
  //     this.backgroundColor = '#91846E';
  //   } else if (this.route.startsWith('/words')) {
  //     this.backgroundColor = '#916E8C';
  //   } else if (this.route== '/about') {
  //     this.backgroundColor = '#6E7B91';
  //   } else if (this.route == '/') {
  //     this.backgroundColor = '#6E9173';
  //   }
  // }
}
