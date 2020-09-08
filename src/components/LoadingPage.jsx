import { motion } from "framer-motion";
import { useTheme } from "emotion-theming";
import Logo from "./Logo";

export default function LoadingPage() {
  const theme = useTheme();
  const pageTransition = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      background: theme.colors.white,
      filter: `invert()`,
      opacity: 0,
    },
  };
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit" className="h-screen">
      <Logo className="w-8/12 mx-auto" />
    </motion.div>
  )
}