import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.a)`
  cursor: pointer;
  border-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 300;
  border-width: 1px;
  transition: all 0.3s ease;
`;
