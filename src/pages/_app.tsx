import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";
import { client } from "../lib/apollo-client";
import theme from "../styles/theme";

const myTheme = extendTheme(theme);

interface Props {
  children: React.ReactNode;
}

const GlobalStyle = ({ children }: Props) => (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <CSSReset />
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}
    />
    {children}
  </>
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <ChakraProvider theme={myTheme}>
          <GlobalStyle>
            <Component {...pageProps} />
          </GlobalStyle>
        </ChakraProvider>
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default MyApp;
