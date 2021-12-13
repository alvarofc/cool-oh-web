import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";


const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Cool-oh!</title>
        <meta
          name="description"
          content="Show me that booty"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
