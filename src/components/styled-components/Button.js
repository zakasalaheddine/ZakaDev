import styled from "@emotion/styled";

export const StyledButton = styled.a`
  cursor: pointer;
  border-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 300;
  border-width: 1px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.dark};
    font-weight: 500;
  }
`;
