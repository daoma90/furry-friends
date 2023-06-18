import Head from "next/head";
import Layout from "@/src/layout";
import Grid from "@/src/components/organisms/Grid";
import PageHeader from "@/src/components/organisms/PageHeader";

export default function Home() {
  return (
    <>
      <Head>
        <title>Furry friends</title>
        <meta name="description" content="Organize your life as a crazy cat person" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <PageHeader />
          <Grid />
        </Layout>
      </main>
    </>
  );
}
