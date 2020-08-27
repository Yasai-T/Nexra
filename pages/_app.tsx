import type { AppProps } from "next/app";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import theme from "../theme";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
