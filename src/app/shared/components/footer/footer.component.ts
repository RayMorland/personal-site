import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Event } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  // private routerEventSub: Subscription;
  public backgroundColor: string = 'none';
  navEnd: Observable<NavigationEnd>;
  route: any;

  constructor(private router: Router) {
    this.navEnd = router.events.pipe(
      filter((evt) => evt instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
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
