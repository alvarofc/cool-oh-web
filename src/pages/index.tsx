import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";
import Footer from "../components/Footer";


const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Cool-oh!</title>
        <meta property="og:title" content="Cool-Oh NFTs" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Cool-Oh is an NFT collection all about our great friend, the derriere." />
        <meta property="og:image" content="https://i.imgur.com/5wWCmGq.jpeg" />
        <meta property="og:url" content="http://cool-oh.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <HomeView />
      <Footer />
    </div>
  );
};

export default Home;
