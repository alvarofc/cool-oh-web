import React from "react";
import Image from "next/dist/client/image";
import cool_oh_logo from "/public/logo_cool-oh_alpha_128x128.png"
import { ImTwitter } from "react-icons/im";
import {FaDiscord} from 'react-icons/fa'
function Footer() {
  return (
    <footer className="items-center p-4 footer bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <Image src={cool_oh_logo} />
          </div>
        </div>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col pr-10 gap-4 md:place-self-center md:justify-self-end">
        <a href="https://twitter.com/cool_oh_nft" target="_blank" rel="noreferrer">
          <ImTwitter className={` mx-2 fill-gray300 hover:fill-[#1DA1F2]`} />
        </a>
        <a href="https://discord.com/invite/mJD86nUtUZ" target="_blank" rel="noreferrer">
          <FaDiscord className={` mx-2 fill-gray300 hover:fill-[#5865F2]`} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;