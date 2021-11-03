import React, { lazy } from "react";
import FPBanner from "../../components/FP_Banner";
import Image from "next/image";
import Link from "next/link"; 

export default function ContentPage() {
  // run a check to see if page exists , if not show fall back page

  return (
    <>
      <FPBanner title="Logged in Content" description="Hello" />
      <div className="bg-white-50 pt-10">
        <div className="max-w-11xl mx-auto grid grid-cols-12 gap-6 ">
          <div className="col-span-2 ">
            <h3 className="mx-auto mb-6 text-2xl font-semibold text-black lg:text-3xl">
              {" "}
              My Profile
            </h3>
          </div>
          <div className="col-span-8 bg-white">
            <div className="mx-auto text-base font-medium leading-relaxed text-gray-800">
              <h2 className="mx-auto mt-4 mb-4 text-xl font-sans font-semibold text-black">
                Logged in Content
              </h2>
             
            </div>
            <div className="mx-auto text-base font-xlleading-relaxed text-gray-800">
              <h3 className="mx-auto mt-4 mb-4 text-xl font-semibold text-black">
                Download this file
              </h3>
            </div>
          </div>
          <div className="col-span-2 bg-white">
            <div className="aspect-w-16 aspect-h-9">Side Stuff</div>
          </div>
        </div>
      </div>
    </>
  );
}
