import styled from "@emotion/styled";

export const PrimaryTitle = styled.h1`
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
    margin-top: -10px;
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


export const SecondaryTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.roboto};
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 500;
`