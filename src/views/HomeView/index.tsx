
import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Nav } from "components/Nav";
import futbolista from "/public/futbolista.png"
import Image from "next/dist/client/image";
import styles from "./index.module.css";
import {ImTwitter} from 'react-icons/im'
import {FaDiscord} from 'react-icons/fa'
import { Slide } from "components/Slide";

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
                  Welcome to the world of Cool-Ohs!
                </h1>
                
                <p className="mb-5">
                  This scaffold includes awesome tools for rapid development and
                  deploy dapps to Solana: Next.JS, TypeScript, TailwindCSS,
                  Daisy UI.
                </p>
                <p className="mb-5">
                  Sollana wallet adapter is connected and ready to use.
                </p>
                <ul className="flex items-center gap-4 content-between place-content-center">
                  <li><a className="btn border-0 bg-blue-400  hover:rounded-md hover:bg-blue-300 transition duration-500 ease-in-out transform  hover:scale-105" href="https://twitter.com/cool_oh_nft" target="_blank" rel="noreferrer"> <ImTwitter className="mr-2"/>Follow Us</a></li>
                  <li><a className="btn border-0 bg-indigo-400 hover:rounded-md hover:bg-indigo-300 transition duration-500 ease-in-out transform  hover:scale-105" href="https://discord.gg/HDfcd9FF" target="_blank" rel="noreferrer"><FaDiscord className="mr-2"/> Join Us</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        </section>
        <section className="scroll-mgt" id="what">
          <div className="flow-root">
            <div className="float-left object-center">
              <p className=" text-2xl text-black font-bold">What are Cool-Ohs?</p>
              <p className="pt-4">Algo no tan grande que queremos contar</p>
              <button className="btn border-0 place-content-center mt-10">Un boton</button>
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
            <h2>Roadmap</h2>
            </div> </section>
        <section id="rarity" className="scroll-mgt"> 
        <div>
          <h2>Rarity</h2>
        </div>
        </section>
        <section id="team" className="scroll-mgt"> 
        <div>
          <h2>
            Team
          </h2>
        </div>
        </section>
        <section id="faq" className="scroll-mgt"> 
        <h2>F.A.Q.</h2>
        </section>
        <footer className="">
          <h2 className="text-xl font-black">Get deeper</h2>
          <ImTwitter className="text-blue-300"/>
        </footer>
      </div>
    </div>
  );
};
