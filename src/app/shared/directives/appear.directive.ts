import {
  ElementRef,
  Output,
  Directive,
  AfterViewInit,
  OnDestroy,
  EventEmitter,
  OnInit,
  HostListener,
} from "@angular/core";
import { Subscription } from "rxjs";
import { fromEvent } from "rxjs";
import { startWith } from "rxjs/operators";

@Directive({
  selector: "[appear]",
})
export class AppearDirective implements OnInit, AfterViewInit, OnDestroy {
  @Output() appear: EventEmitter<any>;
  @HostListener("window:scroll", ["$event"]) onScroll(event: any) {
    if (
      this.element.nativeElement.getBoundingClientRect().y <=
      window.innerHeight * 0.75
    ) {
      this.element.nativeElement.style.opacity = 1;
      this.element.nativeElement.style.transform = "translateY(0px)";
    }
  }

  elementPos: number;
  elementHeight: number;

  scrollPos: number;
  windowHeight: number;

  subscriptionScroll: Subscription;
  subscriptionResize: Subscription;

  constructor(private element: ElementRef) {
    // this.appear = new EventEmitter<any>();
  }

  saveDimensions() {
    this.elementPos = this.getOffsetTop(this.element.nativeElement);
    this.elementHeight = this.element.nativeElement.offsetHeight;
    this.windowHeight = window.innerHeight;
  }
  saveScrollPos() {
    this.scrollPos = window.scrollY;
  }
  getOffsetTop(element: any) {
    let offsetTop = element.offsetTop || 0;
    if (element.offsetParent) {
      offsetTop += this.getOffsetTop(element.offsetParent);
    }
    return offsetTop;
  }
  checkVisibility() {
    // console.log(
    //   this.scrollPos,
    //   this.elementPos,
    //   this.windowHeight,
    //   this.elementHeight,
    //   this.element
    // );
    if (this.isVisible()) {
      // double check dimensions (due to async loaded contents, e.g. images)
      this.saveDimensions();
      if (this.isVisible()) {
        this.unsubscribe();

        this.element.nativeElement.style.opacity = 1;
        this.appear.emit(this.element);
      }
    }
  }
  isVisible() {
    return (
      this.scrollPos >= this.elementPos ||
      this.scrollPos + this.windowHeight >= this.elementPos + this.elementHeight
    );
  }

  subscribe() {
    this.subscriptionScroll = fromEvent(window, "scroll")
      .pipe(startWith(null))
      .subscribe(() => {
        this.saveScrollPos();
        this.checkVisibility();
      });
    this.subscriptionResize = fromEvent(window, "resize")
      .pipe(startWith(null))
      .subscribe(() => {
        this.saveDimensions();
        this.checkVisibility();
      });
  }
  unsubscribe() {
    if (this.subscriptionScroll) {
      this.subscriptionScroll.unsubscribe();
    }
    if (this.subscriptionResize) {
      this.subscriptionResize.unsubscribe();
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.element.nativeElement.style.opacity = 0;
    this.element.nativeElement.style.transform = "translateY(100px)";
    this.element.nativeElement.style.transition =
      "opacity 1s ease, transform 1s ease";
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (
        this.element.nativeElement.getBoundingClientRect().y <=
        window.innerHeight * 0.75
      ) {
        this.element.nativeElement.style.opacity = 1;
        this.element.nativeElement.style.transform = "translateY(0px)";
      } else {
      }
    }, 0);
  }
  ngOnDestroy() {
    // this.unsubscribe();
  }
}
