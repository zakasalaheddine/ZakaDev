import { defaultTheme } from "../themes/default";

export const PageTransition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
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
