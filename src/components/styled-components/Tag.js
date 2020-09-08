import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Tag = styled(motion.span)`
  font-size: 18px;
  display: block;
  font-family: ${(props) => props.theme.fonts.laBelleAurore};
  color: ${(props) => props.theme.colors.dark};
`;
