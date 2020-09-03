import styled from "@emotion/styled";

export const CodeEditor = styled.div`
  margin: 10px 20px;
`;

export const Line = styled.div`
  position: relative;
  padding-left: 20px;
  &::before {
    content: "${(props) => props.number}";
    position: absolute;
    left: -20px;
    color: ${(props) => props.theme.codeEditorColors.dots};
    padding-right: 10px;
    border-right: 1px solid ${(props) => props.theme.codeEditorColors.dots};
    margin-right: 10px;
  }
`;

export const Method = styled.span`
  color: ${(props) => props.theme.codeEditorColors.method};
`;

export const Dots = styled.div`
  padding-right: 5px;
  display: inline-block;
  color: ${(props) => props.theme.codeEditorColors.dots};
`;
export const PropName = styled.span`
  color: ${(props) => props.theme.codeEditorColors.propName};
`;
export const Scope = styled.span`
  color: ${(props) => props.theme.codeEditorColors.scope};
`;

export const Prop = styled.span`
  color: ${(props) => props.theme.codeEditorColors.props};
`;

export const String = styled.span`
  color: ${(props) => props.theme.codeEditorColors.string};
`;
