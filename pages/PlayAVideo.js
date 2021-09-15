import React from "react";
import Video from "../components/Video";

export default function PlayAVideo() {
  return (
    <>
      <div className="bg-white-50 pt-10">
        <div className="max-w-11xl mx-auto grid grid-cols-12 bg-white-200">
          <div className="col-span-2"></div>
          <div className="col-span-8 bg-white">
            <h3 className="mx-auto mb-6 text-2xl font-semibold text-black lg:text-3xl">
              {" "}
              Play a Video{" "}
            </h3>
            <Video
              videoSrcURL="https://www.youtube.com/embed/75uL12ZJTxc"
              videoTitle="Skiing Here and There"
            />
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="mx-auto mb-6 text-2xl font-semibold text-black lg:text-3xl">
            {" "}
          </h3>
        </div>
      </div>
    </>
  );
}
