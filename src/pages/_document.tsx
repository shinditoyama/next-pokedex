import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript, extendTheme } from "@chakra-ui/react";
import theme from "../styles/theme";

const myTheme = extendTheme(theme);

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={myTheme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
