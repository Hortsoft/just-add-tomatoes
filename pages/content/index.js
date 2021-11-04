import React, { lazy } from "react";
import Image from "next/image";
import Link from "next/link";
import FPBanner from "../../components/FP_Banner"; 


import { getSession, signIn, signOut } from "next-auth/client";

export default function Content({ session }) {
  // run a check to see if page exists , if not show fall back page

  return (
    <>
      <FPBanner title="Logged in Content" description="Hello" />
      <div className="bg-white-50 pt-10">
        <div className="max-w-11xl mx-auto grid grid-cols-12 gap-6 ">
          <div className="col-span-2 p-3">
            {session ? (
              <button
                className="title p-4 bg-blue-500 text-md rounded-lg focus:border-2 border-gray-300"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            ) : (
              <button
                className="title p-4 bg-blue-500 text-md rounded-lg focus:border-2 border-gray-300"
                onClick={() => signIn()}
              >
                Sign in
              </button>
            )}{" "}
            {session && (
              <p className="  p-4 font-bold">
                <Link href="./content/profile">
                  <a>Profile</a>
                </Link>
                <br />
                <Link href="./">
                  <a>Your content</a>
                </Link>
              </p>
            )}
          </div>
          <div className="col-span-8 bg-white">
            <div className="mx-auto text-base font-medium leading-relaxed text-gray-800">
              <h2 className="mx-auto mt-4 mb-4 text-xl font-sans font-semibold text-black">
                {session ? (
                  <div>Logged in Content </div>
                ) : (
                  <div> Log in to view</div>
                )}
              </h2>
            </div>
            {session && (
              <div className="mx-auto text-base font-xlleading-relaxed text-gray-800">
                <p className="p-3">
                  Sea ea nonumy disputando, sonet aeterno volumus eu nec. Eam ad
                  enim dolorum, nec at nullam alienum. Sed ad graeco alterum
                  eloquentiam, probo vivendo tibique sed ex. Augue recteque eu
                  eum. Choro tantas mandamus no vis.
                </p>

                <p className="p-3">
                  Vero summo consul vix id, mei eu eius diceret habemus,
                  accumsan dissentiet usu cu. Cu impetus prompta mea, no dicta
                  scripta sed. Aliquid liberavisse sit an, nullam eirmod id nam.
                  Enim lobortis at est. Dolore menandri suscipiantur no cum, vel
                  facilis pertinacia ad, solum everti moderatius vim cu.
                </p>

                <p className="p-3">
                  Facete percipitur dissentiunt ea sit, at pertinacia
                  necessitatibus vix. Meis insolens vim ad, vim at doming
                  impetus vidisse, pro at erat invidunt. Eu per detracto
                  liberavisse. Cu hinc feugait blandit duo, sed ne omittam
                  intellegat. Usu ad inani nihil, at oblique facilis sit.
                </p>
                <Image
                  className="float-right"
                  src="/images/Stars.jpg"
                  width="300px"
                  height="150px"
                  alt=""
                />
                <p className="p-3  ">
                  {" "}
                  Paulo doctus concludaturque ne pro. Per soleat propriae
                  vituperata ea, usu inermis persequeris ea. Ad mei odio paulo
                  accusamus, posse suscipiantur ius ad. At semper invidunt usu,
                  malis inani ei per.
                </p>

                <p className="p-3">
                  {" "}
                  His ut adhuc eleifend, duo at labitur omittam placerat. Nec
                  brute persius eu, solet definitiones ex vel. Sit ea labitur
                  laboramus. Ad vel aeterno aliquando. Mei ubique placerat ea.
                  Mei in putent tibique, quando temporibus delicatissimi has ea.
                </p>

                <p className="p-3">
                  {" "}
                  Duo cu ancillae scribentur. Vide brute tollit quo no, purto
                  dicat et sed, mei zril periculis et. Ad labore commodo
                  mandamus nec, detraxit definiebas ea nec, esse novum ei vis.
                  Mutat scaevola ponderum ne vis, ea detracto voluptua eam.
                  Gloriatur conceptam sit ex, usu periculis assueverit ne. Ius
                  eu ipsum error.
                </p>
                <b className="mx-auto p-3 mt-4 mb-4 text-xl font-semibold text-black">
                  Umbrellas File <br /> <br />
                  <a
                    href="/images/Umbrellas.pdf"
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="p-2 pl-3 pr-3 bg-blue-500 text-gray-100 text-md rounded-lg focus:border-4 border-gray-300"
                  >
                    Click to Download
                  </a>
                </b>
              </div>
            )}
          </div>
          <div className="col-span-2 bg-white">
            <div className="aspect-w-16 aspect-h-9">Side Stuff</div>
          </div>
        </div>
      </div>
    </>
  );
}


export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
