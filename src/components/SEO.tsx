import Head from "next/head";

interface Props {
  title: string;
}

export default function SEO({ title }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content="Shindi Toyama" />
      <meta name="description" content="enciclopédia de podemon" />
      <meta name="keywords" content="pokemon, pokedex" />
    </Head>
  );
}
