import styled from "@emotion/styled";

export const StyledButton = styled.a`
  cursor: pointer;
  border-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
`;
