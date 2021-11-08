import {
  sequence,
  trigger,
  animate,
  style,
  group,
  query,
  transition,
  animateChild,
  state,
  animation,
  useAnimation,
  stagger,
} from "@angular/animations";

//   cubic-bezier(0.0, 0.0, 0.2, 1)

const reusable = animation(
  [
    style({
      opacity: "{{opacity}}",
      transform: "scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})",
    }),
    animate("{{duration}} {{delay}} ease", style("*")),
  ],
  {
    params: {
      duration: "500ms",
      delay: "0ms",
      opacity: "0",
      scale: "1",
      x: "0",
      y: "0",
      z: "0",
    },
  }
);

export const rmAnimations = [
  trigger("animate", [
    transition("void => *", [useAnimation(reusable)]),
    transition("* => void", [useAnimation(reusable)]),
  ]),

  trigger("fadeInOut", [
    state(
      "0",
      style({
        opacity: 0,
      })
    ),
    state(
      "1",
      style({
        opacity: 1,
      })
    ),
    transition("0 => 1", animate("500ms")),
    transition("1 => 0", animate("500ms")),
  ]),
];
