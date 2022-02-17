import React, { Component } from 'react';
import Image from "next/dist/client/image";
import futbolista from "/public/futbolista.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export const Slide = () => {
  return (
    <Carousel autoPlay={true}  infiniteLoop={true} centerMode={true} centerSlidePercentage={25} emulateTouch={true} showStatus={false} showArrows={false}>

      <div className=" w-5/6 bg-green-100 rounded-md">
        <Image
          className="  rounded-lg shadow-xl "
          src={futbolista}
          alt="culo"
        />
      </div>
      <div className="w-5/6 bg-blue-100 rounded-md">
        <Image
          className="  rounded-lg shadow-xl "
          src={futbolista}
          alt="culo"
        />
      </div>
      <div className="w-5/6   bg-yellow-100 rounded-md">
        <Image
          className=" rounded-lg shadow-xl "
          src={futbolista}
          alt="culo"
        />
      </div>
      <div className="w-5/6   bg-red-100 rounded-md ">
        <Image
          className="   rounded-lg shadow-xl"
          src={futbolista}
          alt="culo"
        />
      </div>
      <div className="w-5/6  bg-purple-100 rounded-md">
        <Image
          className="   rounded-lg shadow-xl "
          src={futbolista}
          alt="culo"
        />
      </div>

    </Carousel>
  );

};
