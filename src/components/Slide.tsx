import React from "react";
import Image from "next/dist/client/image";
import futbolista from "/public/futbolista.png";

export const Slide = () => {
  return (
    <div>
    <div className="relative flex gap-6 snap-x overflow-x-auto pb-14 no-bar">
    <div className="snap-center shrink-0">
      <div className="shrink-0 w-4 sm:w-48"></div>
    </div>
      <div className="snap-center flex-shrink-0 first:pl-8 last:pr-8 w-2/6 bg-green-100 rounded-md">
        <Image
          className="flex-shrink-0 w-60 rounded-lg shadow-xl "
          src={futbolista}
          alt="culo"
        />
      </div>
      <div className="snap-center flex-shrink-0 first:pl-8 last:pr-8 w-2/6 bg-blue-100 rounded-md">
        <Image
          className="flex-shrink-0 w-60  rounded-lg shadow-xl "
          src={futbolista}
          alt="culo"
        />
      </div>
      <div className="snap-center flex-shrink-0 first:pl-8 last:pr-8 w-2/6 bg-yellow-100 rounded-md">
        <Image
          className="flex-shrink-0 w-60 rounded-lg shadow-xl "
          src={futbolista}
          alt="culo"
        />
      </div>
      <div className="snap-center flex-shrink-0 first:pl-8 last:pr-8 w-2/6 bg-red-100 rounded-md ">
        <Image
          className="flex-shrink-0 w-60  rounded-lg shadow-xl"
          src={futbolista}
          alt="culo"
        />
      </div>
      <div className="snap-center flex-shrink-0 first:pl-8 last:pr-8 w-2/6 bg-purple-100 rounded-md">
        <Image
          className="flex-shrink-0 w-60  rounded-lg shadow-xl "
          src={futbolista}
          alt="culo"
        />
      </div>
      <div className="snap-center shrink-0">
      <div className="shrink-0 w-4 sm:w-48"></div>
    </div>

    </div>

    </div>
  );
};
