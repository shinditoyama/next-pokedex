import React from "react";
import Head from "next/head";
import Sidebar from "../components/Sidebar";

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Shindi Toyama" />
        <meta name="description" content="enciclopédia de podemon" />
        <meta name="keywords" content="pokemon, pokedex" />
      </Head>
      <Sidebar>
        <main>{children}</main>
      </Sidebar>
    </>
  );
}
