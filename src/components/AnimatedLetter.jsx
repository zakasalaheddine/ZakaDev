import { motion } from "framer-motion";
import { AnimatedStyledChar } from "./styled-components/PrimaryTitle";
import { defaultTheme } from "../themes/default";

export default function AnimatedLetter({ isPrimary, char, theme }) {
  return (
    <AnimatedStyledChar
      variants={{
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        }
      }}
      whileHover={{
        scaleX: [1, 1.25, .75, 1.15, .95, 1.05, 1],
        scaleY: [1, .75, 1.25, .85, 1.05, .95, 1],
        
        transition: {
          duration: .8
        }
      }}
      initial="initial"
      animate="animate"
      className={`${isPrimary ? 'primary' : ""}`}>
      {char}
    </AnimatedStyledChar>
  )
}