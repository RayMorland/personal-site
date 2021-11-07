import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { filter } from "rxjs/operators";
import { Event } from "@angular/router";
import { rmAnimations } from "../../../animations/rm-animations";

@Component({
  selector: "app-public-site",
  templateUrl: "./public-site.component.html",
  styleUrls: ["./public-site.component.sass"],
  animations: [rmAnimations],
})
export class PublicSiteComponent implements OnInit {
  public backgroundColor: string = "none";
  navEnd: Observable<NavigationEnd>;
  navStart: Observable<NavigationStart>;
  route: any;

  constructor(private router: Router) {
    this.navEnd = router.events.pipe(
      filter((evt) => evt instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
    this.navStart = router.events.pipe(
      filter((evt) => evt instanceof NavigationStart)
    ) as Observable<NavigationEnd>;
    this.navStart.subscribe((e) => {
      console.log(e.url.split("/").length);
      if (e.url.split("/")[1] === "work" && e.url.split("/").length > 2) {
        document.body.style.backgroundColor = "#ffe8d6";
        document.body.style.color = "#3f4238";
      } else {
        document.body.style.backgroundColor = "#3f4238";
        document.body.style.color = "#ffe8d6";
      }
      window.scrollTo(0, 0);
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
  //     document.body.style.backgroundColor = '#A79D8B';
  //     this.backgroundColor = '#91846E';
  //   } else if (this.route.startsWith('/words')) {
  //     document.body.style.backgroundColor = '#A78BA3';
  //     this.backgroundColor = '#916E8C';
  //   } else if (this.route == '/about') {
  //     document.body.style.backgroundColor = '#8B95A7';
  //     this.backgroundColor = '#6E7B91';
  //   } else if (this.route == '/') {
  //     document.body.style.backgroundColor = '#8BA78F';
  //     this.backgroundColor = '#6E9173';
  //   }
  // }
}
