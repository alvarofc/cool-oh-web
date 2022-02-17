import { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import Link from "next/link";
import futbolista from "/public/futbolista.png";
import { ImTwitter } from "react-icons/im";
import {FaDiscord} from 'react-icons/fa'
import { BiMenu, BiX } from "react-icons/bi";

export const Nav = () => {
  const [active, setActive] = useState(false);
  

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="navbar mb-2 shadow-lg rounded-box sticky top-2 bg-white z-50">
      <div className="flex-none">
        <Link href={"/"} passHref={true}>
          <button className={`btn ${active ? "hidden" : ""} btn-square bg-white border-0 hover:bg-white`}>
            <Image src={futbolista} alt="futbolista logo" />
          </button>
        </Link>
      </div>

      <button
        className=" inline-flex p-3 hover:bg-grey-600 rounded lg:hidden ml-auto hover:text-gray-500 outline-none text-2xl text-gray-500 "
        onClick={handleClick}
      >
        {active ? <BiX /> : <BiMenu />}
      </button>
      {/*Note that in this div we will use a ternary operator to decide whether to display the content of the div  */}
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link href="/#what">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:border-b-4 hover:border-indigo-700 scroll-smooth">
              What
            </a>
          </Link>
          <Link href="/#roadmap">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:border-b-4 hover:border-indigo-700 scroll-smooth">
              Roadmap
            </a>
          </Link>
          <Link href="/#rarity">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:border-b-4 hover:border-indigo-700 scroll-smooth">
              Rarity
            </a>
          </Link>
          <Link href="/#team">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:border-b-4 hover:border-indigo-700 scroll-smooth">
              Team
            </a>
          </Link>
          <Link href="/#faq">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:border-b-4 hover:border-indigo-700 mr-2 scroll-smooth">
              FAQ
            </a>
          </Link>
          {document.URL.split("/")[3] == "mint" ? (
            <WalletMultiButton className="btn btn-ghost bg-grey-200" />
          ) : (
            <Link href="/mint" passHref>
              <button className="btn transition border-0 duration-500 ease-in-out   transform mr-2 hover:-translate-y-1 hover:bg-gradient-to-br from-pink-500 to-yellow-500">
                Mint Your Cool-Oh
              </button>
            </Link>
          )}
          <a href="https://twitter.com/cool_oh_nft" target="_blank" rel="noreferrer">
          <ImTwitter className={`${active ? "hidden" : ""} mx-2 hover:fill-gray-400`} color={'#1DA1F2'}/>
          </a>
          <a href="https://discord.com/invite/mJD86nUtUZ" target="_blank" rel="noreferrer">
          <FaDiscord className={`${active ? "hidden" : ""} mx-2 hover:fill-gray-400`} color={"#5865F2"}/>
          </a>
        </div>
      </div>
    </div>
  );
};
