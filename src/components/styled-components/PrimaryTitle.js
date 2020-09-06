import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const PrimaryTitle = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.roboto};
  color: ${(props) => props.theme.colors.white};
  font-weight: 900;
  position: relative;
  span.primary {
    color: ${(props) => props.theme.colors.primary};
  }
  &::before {
    content: "<h1>";
    font-family: ${(props) => props.theme.fonts.laBelleAurore};
    color: ${(props) => props.theme.colors.dark};
    font-size: 18px;
    position: absolute;
    margin-top: -12px;
    margin-left: -20px;
  }
  &::after {
    content: "<h1/>";
    font-family: ${(props) => props.theme.fonts.laBelleAurore};
    color: ${(props) => props.theme.colors.dark};
    font-size: 18px;
    position: absolute;
    margin-top: 0px;
    margin-left: -20px;
  }
`;

export const SecondaryTitle = styled(motion.h2)`
  font-family: ${(props) => props.theme.fonts.roboto};
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 300;
`;

export const PageTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.roboto};
  color: ${(props) => props.theme.colors.white};
  font-weight: 900;
  position: relative;
  &::before {
    content: "<h1>";
    font-family: ${(props) => props.theme.fonts.laBelleAurore};
    color: ${(props) => props.theme.colors.dark};
    font-size: 18px;
    position: absolute;
    margin-left: -30px;
  }
  &::after {
    content: "<h1/>";
    font-family: ${(props) => props.theme.fonts.laBelleAurore};
    color: ${(props) => props.theme.colors.dark};
    font-size: 18px;
    position: absolute;
    margin-left: 15px;
    bottom: 0;
  }
`;

export const AnimatedStyledChar = styled(motion.span)`
  display: inline-block;
  cursor: default;
`;
