import React from "react";
import Image from "next/image";

export default function FP_Banner(props) {
  const bannerItems = props;

  return (
    <div className="relative h-64  overflow-hidden bg-sky-300">
      <div className="absolute z-30 flex w-full h-full">
        <div className="relative z-10 w-5/6 px-6 py-8 text-sbtOrange md:py-10 md:w-1/2">
          <h2 className="text-5xl">{bannerItems.title}</h2>
          <span></span> <br />
          
          <p className="text-base">{bannerItems.description} </p>
          <button
            className="text-sbtOrange bg-sbtBlue border border-solid border-sbtOrange hover:bg-sbtOrange hover:text-white active:bg-sbtOrange font-normal w-40  text-xl px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1   ease-linear transition-all duration-150"
            type="button"
          >
            Learn more
          </button> 
      </div>
      <div className="absolute top-0 right-0 flex w-full h-full">
      <div className="w-1/3 h-full bg-blue-700"></div>
      <div className="relative w-1/3">
        <svg
          fill="currentColor"
          viewBox="0 0 100 100"
          className="absolute inset-y-0 z-20 h-full text-blue-700"
        >
          <polygon id="diagonal" points="0,0 0,100 50,100 0,0"></polygon>
        </svg>
        <svg
          fill="currentColor"
          viewBox="0 0 100 100"
          className="absolute inset-y-0 z-10 h-full ml-3 text-blue-400 opacity-50"
        >
          <polygon points="0,0 0,100 50,100 005"></polygon>
          </svg>
      </div>
    </div>
  </div>
      <div className="absolute top-0 right-0 block w-9/12 h-full">
        <Image
          src={'/images/blue-door.jpg'}
          width={1600}
          height={462}
          alt=""
          className="object-cover min-w-full h-full"
        />
      </div>
    </div>
  );
}
