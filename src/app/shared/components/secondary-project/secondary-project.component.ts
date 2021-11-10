import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-secondary-project",
  templateUrl: "./secondary-project.component.html",
  styleUrls: ["./secondary-project.component.sass"],
})
export class SecondaryProjectComponent implements OnInit {
  @Input() project: any;

  constructor() {}

  ngOnInit(): void {}
}
