import { GlobalStyles } from "@/styles/globalStyles";

import type { AppProps } from "next/app";

import { ThemeContextProvider } from "@/utils/useTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeContextProvider>
  );
}
export default MyApp;
