import { Component, HostListener, OnInit } from "@angular/core";
import { rmAnimations } from "src/app/shared/animations/rm-animations";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.sass"],
  animations: [rmAnimations],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onAppear(e: any) {
    console.log(e);
  }
}
