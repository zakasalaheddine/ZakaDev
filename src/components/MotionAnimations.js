import { defaultTheme } from "../themes/default";

export const PageTransition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
  exit: {
    background: defaultTheme.colors.white,
    filter: `invert()`,
    opacity: 0,
  },
};

export const line = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const rubberBand = {
  scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
  scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
  transition: {
    duration: 0.8,
  },
};
