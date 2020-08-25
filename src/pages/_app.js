import "../styles/index.css";
import { ThemeProvider } from "emotion-theming";
import { defaultTheme, GlobalStyles } from "../themes/default";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Navbar />
      <main className="container mx-auto">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
