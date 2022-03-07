import Link from "next/link";
import { FC, useState } from "react";
import Image from "next/dist/client/image";
import dali from "/public/dali.png";
import { Nav } from "../../components/Nav";



export const EarlyView: FC = ({}) => {


  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <Nav />

      <Image src={dali} className={"flex justify-center items-center h-screen"}/>

    </div>
  );
};


