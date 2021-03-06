import { useTheme } from "emotion-theming";
import { Global, css } from "@emotion/core";
export const defaultTheme = {
  colors: {
    background: "#1D1D1D",
    primary: "#64FFDA",
    secondary: "#8892B0",
    dark: "#515152",
    white: "#E5E5E5",
  },
  codeEditorColors: {
    method: "#5918df",
    propName: "#eeff31;",
    string: "#24e33a",
    scope: "#e3244c",
    props: "#24e394",
    dots: "#3b3553",
  },
  fonts: {
    roboto: "'Roboto', sans-serif",
    robotoMono: "Roboto Mono', monospace",
    laBelleAurore: "'La Belle Aurore', cursive",
    firaCode: "'Fira Code', monospace",
  },
};

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=La+Belle+Aurore&family=Roboto+Mono&family=Roboto:wght@100;300;400;500;700;900&display=swap");
        body {
          background-color: ${theme.colors.background};
          font-family: ${theme.fonts.roboto};
          color: ${theme.colors.white};
        }
      `}
    />
  );
};
