import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Vikram Dudi!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my site!" />
        <p className="description">
          My inspiration <code>Myanh</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
