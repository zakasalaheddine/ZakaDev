import styled from "@emotion/styled";

export const NavigationLink = styled.a`
  font-family: ${(props) => props.theme.fonts.firaCode};
  color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.secondary};
`;
