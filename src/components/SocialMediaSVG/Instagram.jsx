import { motion } from "framer-motion";
import { useTheme } from "emotion-theming";
import { rubberBand } from "../MotionAnimations";

export default function Instagram() {
  const theme = useTheme();
  return (
    <motion.svg whileHover={{
      fill: "#e1306c",
      ...rubberBand
    }}
      fill={theme.colors.primary}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="40px"
      height="40px">
      <path d="M 13 6 C 9.140625 6 6 9.140625 6 13 L 6 51 C 6 54.859375 9.140625 58 13 58 L 51 58 C 54.859375 58 58 54.859375 58 51 L 58 13 C 58 9.140625 54.859375 6 51 6 Z M 13 8 L 51 8 C 53.757813 8 56 10.242188 56 13 L 56 51 C 56 53.757813 53.757813 56 51 56 L 13 56 C 10.242188 56 8 53.757813 8 51 L 8 13 C 8 10.242188 10.242188 8 13 8 Z M 48 13 C 46.347656 13 45 14.347656 45 16 C 45 17.652344 46.347656 19 48 19 C 49.652344 19 51 17.652344 51 16 C 51 14.347656 49.652344 13 48 13 Z M 48 14.53125 C 48.808594 14.53125 49.46875 15.191406 49.46875 16 C 49.46875 16.808594 48.808594 17.46875 48 17.46875 C 47.191406 17.46875 46.53125 16.808594 46.53125 16 C 46.53125 15.191406 47.191406 14.53125 48 14.53125 Z M 32 18 C 24.28125 18 18 24.28125 18 32 C 18 39.71875 24.28125 46 32 46 C 39.71875 46 46 39.71875 46 32 C 46 24.28125 39.71875 18 32 18 Z M 32 20 C 38.617188 20 44 25.382813 44 32 C 44 38.617188 38.617188 44 32 44 C 25.382813 44 20 38.617188 20 32 C 20 25.382813 25.382813 20 32 20 Z M 32 22 C 26.484375 22 22 26.484375 22 32 C 22 37.515625 26.484375 42 32 42 C 37.515625 42 42 37.515625 42 32 C 42 26.484375 37.515625 22 32 22 Z M 32 24 C 36.410156 24 40 27.589844 40 32 C 40 36.410156 36.410156 40 32 40 C 27.589844 40 24 36.410156 24 32 C 24 27.589844 27.589844 24 32 24 Z M 12 49 C 11.449219 49 11 49.449219 11 50 L 11 52 C 11 52.550781 11.449219 53 12 53 C 12.550781 53 13 52.550781 13 52 L 13 50 C 13 49.449219 12.550781 49 12 49 Z M 17 49 C 16.449219 49 16 49.449219 16 50 L 16 52 C 16 52.550781 16.449219 53 17 53 C 17.550781 53 18 52.550781 18 52 L 18 50 C 18 49.449219 17.550781 49 17 49 Z M 22 49 C 21.449219 49 21 49.449219 21 50 L 21 52 C 21 52.550781 21.449219 53 22 53 C 22.550781 53 23 52.550781 23 52 L 23 50 C 23 49.449219 22.550781 49 22 49 Z M 27 49 C 26.449219 49 26 49.449219 26 50 L 26 52 C 26 52.550781 26.449219 53 27 53 C 27.550781 53 28 52.550781 28 52 L 28 50 C 28 49.449219 27.550781 49 27 49 Z M 32 49 C 31.449219 49 31 49.449219 31 50 L 31 52 C 31 52.550781 31.449219 53 32 53 C 32.550781 53 33 52.550781 33 52 L 33 50 C 33 49.449219 32.550781 49 32 49 Z M 37 49 C 36.449219 49 36 49.449219 36 50 L 36 52 C 36 52.550781 36.449219 53 37 53 C 37.550781 53 38 52.550781 38 52 L 38 50 C 38 49.449219 37.550781 49 37 49 Z M 42 49 C 41.449219 49 41 49.449219 41 50 L 41 52 C 41 52.550781 41.449219 53 42 53 C 42.550781 53 43 52.550781 43 52 L 43 50 C 43 49.449219 42.550781 49 42 49 Z M 47 49 C 46.449219 49 46 49.449219 46 50 L 46 52 C 46 52.550781 46.449219 53 47 53 C 47.550781 53 48 52.550781 48 52 L 48 50 C 48 49.449219 47.550781 49 47 49 Z M 52 49 C 51.449219 49 51 49.449219 51 50 L 51 52 C 51 52.550781 51.449219 53 52 53 C 52.550781 53 53 52.550781 53 52 L 53 50 C 53 49.449219 52.550781 49 52 49 Z" />
    </motion.svg>
  )
}