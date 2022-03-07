import type { NextPage } from "next";
import Head from "next/head";



import { transitions, positions, Provider as AlertProvider } from "react-alert";
import { Body } from "next/dist/server/web/spec-compliant/body";
import { EarlyView } from "../views/EarlyView";


// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_LEFT,
  timeout: 5000,
  offset: "10px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
const Early: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>You are early!</title>

        <meta property="og:title" content="Cool-Oh NFTs" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Cool-Oh is an NFT collection all about our great friend, the derriere." />
        <meta property="og:image" content="https://i.imgur.com/5wWCmGq.jpeg" />
        <meta property="og:url" content="http://cool-oh.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <EarlyView/>

    </div>
  );
};

export default Early;