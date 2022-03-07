import Link from "next/link";
import { FC, useState } from "react";
import Image from "next/dist/client/image";
import dali from "/public/dali.png";
import { Nav } from "../../components/Nav";
import { ImTwitter } from "react-icons/im";
import { FaDiscord } from "react-icons/fa";



export const EarlyView: FC = ({}) => {


  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <Nav />
      <div className={"flex justify-center items-center h-screen"}>
        <div className={"w-2/6"}>
        <Image src={dali} />
          <p className={"flex justify-center items-center text-2xl pb-5"}>You are a bit early little bun</p>
          <p className={"flex justify-center pb-5 text-center"}>On the mean time, you can check out what we are doing on the links below.</p>
          <ul className="flex items-center gap-4 content-between place-content-center">
            <li><a className="btn border-0 bg-blue-400  hover:rounded-md hover:bg-blue-300 transition duration-500 ease-in-out transform  hover:scale-105" href="https://twitter.com/cool_oh_nft" target="_blank" rel="noreferrer"> <ImTwitter className="mr-2"/>Follow Us</a></li>
            <li><a className="btn border-0 bg-indigo-400 hover:rounded-md hover:bg-indigo-300 transition duration-500 ease-in-out transform  hover:scale-105" href="https://discord.com/invite/mJD86nUtUZ" target="_blank" rel="noreferrer"><FaDiscord className="mr-2"/> Join Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};


