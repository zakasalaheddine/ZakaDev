import { motion } from "framer-motion";
import { useTheme } from "emotion-theming";
import Logo from "./Logo";
import { PageTransition } from "./MotionAnimations";

export default function LoadingPage() {
  return (
    <motion.div variants={PageTransition} initial="initial" animate="animate" exit="exit" className="h-screen">
      <img src="/assets/loading.svg" className="h-full mx-auto" />
    </motion.div>
  )
}