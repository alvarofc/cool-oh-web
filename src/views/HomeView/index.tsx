
import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Nav } from "components/Nav";
import futbolista from "/public/futbolista.png"
import Image from "next/dist/client/image";
import styles from "./index.module.css";
import {ImTwitter} from 'react-icons/im'
import {FaDiscord} from 'react-icons/fa'
import { Slide } from "components/Slide";
import Roadmap from "../../components/Roadmap";
import Team from "../../components/team";
import Faq from "../../components/Faq"


export const HomeView: FC = ({}) => {
  const { publicKey } = useWallet();

  const onClick = () => {};

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className={styles.container}>
       <Nav />
        <section>
        <div className="text-center pt-2">
          <div className="hero min-h-16 py-20">
            <div className="text-center hero-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold">
                  Welcome to the <br/><span className={"text-7xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-200 to-green-400"}>Cooloh-verse!</span>
                </h1>
                
                <p className="mb-5">
                  Cool-Oh is an NFT collection devoted to our great friend, the derriere.
                </p>
                <p className="mb-5">
                  We are building our collection in the open. You can follow us to learn everything about what we do and how we do it.
                </p>
                <ul className="flex items-center gap-4 content-between place-content-center">
                  <li><a className="btn border-0 bg-blue-400  hover:rounded-md hover:bg-blue-300 transition duration-500 ease-in-out transform  hover:scale-105" href="https://twitter.com/cool_oh_nft" target="_blank" rel="noreferrer"> <ImTwitter className="mr-2"/>Follow Us</a></li>
                  <li><a className="btn border-0 bg-indigo-400 hover:rounded-md hover:bg-indigo-300 transition duration-500 ease-in-out transform  hover:scale-105" href="https://discord.com/invite/mJD86nUtUZ" target="_blank" rel="noreferrer"><FaDiscord className="mr-2"/> Join Us</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        </section>
        <section className="scroll-mgt" id="what">
          <div className="flow-root">
            <div className="float-left object-center">
              <p className=" text-2xl text-white font-bold">What are Cool-Ohs?</p>
              <p className="pt-4">Cool-ohs are the living creatures of the Cooloh-verse. The Cooloh-verse as we know it, started with the Big Fart. Since this historical episode, our cool-ohs have become the rockstars of video-games, animated miniseries, apps, and more. </p>
              <p className="pt-4">In 2022, cool-ohs will become an exclusive NFT collection, which will be devoted to share all the process of launching an NFT project from scratch, documenting publicly our “behind the cheeks” including steps taken, decisions made, code built, mistakes, trial and error, and more... We don’t want anyone to miss a fart.</p>
            <p className="pt-4">This world is full of cool-ohs, and we all should have one.</p>
              <button className="btn border-0 place-content-center mt-10">Visit our Blog</button>
            </div>
            <div className="float-right ">
              <div className="w-50 items-center">
            <Image src={futbolista} alt="futbolista logo" className=""/>
            </div>
            </div>
          </div>  
        </section>
        <section id="slider" className="scroll-mgt">
        
          
          <Slide />
        
        </section>
        <section id="roadmap" className="scroll-mgt">
          <div>
            <h2 className=" text-2xl text-white font-bold">Roadmap</h2>
            <Roadmap />
            </div> </section>
        <section id="rarity" className="scroll-mgt"> 
        <div>
          <h2 className=" text-2xl text-white font-bold">Rarity</h2>
        </div>
        </section>
        <section id="team" className="scroll-mgt"> 
        <div>
          <h2 className=" text-2xl text-white font-bold">Team</h2>

          <Team />
        </div>
        </section>
        <section id="faq" className="scroll-mgt"> 
        <h2 className=" text-2xl text-white font-bold">Frequently Asked Questions</h2>
          <Faq />
        </section>

      </div>

    </div>
  );
};
