import "../styles/index.css";
import { ThemeProvider } from "emotion-theming";
import { defaultTheme, GlobalStyles } from "../themes/default";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
