import "../styles/index.css";
import { ThemeProvider } from "emotion-theming";
import { defaultTheme, GlobalStyles } from "../themes/default";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LoadingPage from "../components/LoadingPage";

function MyApp({ Component, pageProps, router: propRouter }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true)
      console.log("App is changing to: ", url, loading);
    };
    const handleRouteChangeDone = (url) => {
      setLoading(false)
      console.log("App is ended to: ", url, loading);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeDone);
    router.events.on("routeChangeError", handleRouteChangeDone);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeDone);
      router.events.off("routeChangeError", handleRouteChangeDone);
    };
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Navbar />
      <main className="container mx-auto">
        <AnimatePresence exitBeforeEnter>
          {loading ? (
            <LoadingPage />
          ) : (
            <Component {...pageProps} key={propRouter.route} />
          )}
        </AnimatePresence>
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
