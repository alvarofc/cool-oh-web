import React, { Component } from 'react';
import Image from "next/dist/client/image";
import futbolista from "/public/futbolista.png";
import woodyAllen from "/public/cool_ohbrities/WoodyAllen_500x500.png";
import killBill from "/public/cool_ohbrities/killbill_500x500.png";
import doc from "/public/cool_ohbrities/doc_500x500.png";
import sleepingbeauty from "/public/cool_ohbrities/sleepingbeauty_500x500.png";

import indy from "/public/cool_ohbrities/indy_500x500.png";

import marilyn from "/public/cool_ohbrities/marilyn_500x500.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export const Slide = () => {
  return (
    <Carousel autoPlay={true}  infiniteLoop={true} centerMode={true} centerSlidePercentage={25} emulateTouch={true} showStatus={false} showArrows={false}>

      <div className=" w-5/6 bg-green-100 rounded-md">
        <Image
          className="  rounded-lg shadow-xl "
          src={woodyAllen}
          alt="Woody Allen Cool-Ohbrity"
        />
      </div>
      <div className="w-5/6 bg-blue-100 rounded-md">
        <Image
          className="  rounded-lg shadow-xl "
          src={marilyn}
          alt="Marilyn Cool-Ohbrity"
        />
      </div>
      <div className="w-5/6   bg-yellow-100 rounded-md">
        <Image
          className=" rounded-lg shadow-xl "
          src={sleepingbeauty}
          alt="Sleeping Beauty Cool-Ohbrity"
        />
      </div>
      <div className="w-5/6   bg-red-100 rounded-md ">
        <Image
          className="   rounded-lg shadow-xl"
          src={indy}
          alt="Indiana Jones Cool-Ohbrity"
        />
      </div>
      <div className="w-5/6  bg-purple-100 rounded-md">
        <Image
          className="   rounded-lg shadow-xl "
          src={killBill}
          alt="Kill Bill Cool-Ohbrity"
        />
      </div>
      <div className="w-5/6  bg-orange-100 rounded-md">
        <Image
          className="   rounded-lg shadow-xl "
          src={doc}
          alt="Doc Cool-Ohbrity"
        />
      </div>
      <div className="w-5/6  bg-orange-100 rounded-md">
        <Image
          className="   rounded-lg shadow-xl "
          src={futbolista}
          alt="Maradona Cool-Ohbrity"
        />
      </div>

    </Carousel>
  );

};
