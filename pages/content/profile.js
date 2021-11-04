import React, { lazy } from "react";
import FPBanner from "../../components/FP_Banner";
import Link from "next/link";
import { getSession, signIn, signOut } from "next-auth/client";
import dynamic from "next/dynamic";

// page always in an authenticated or unauthenticated state..
// import Unauthenticated from "../../components/unauthenticated";
// import Authenticated from "../../components/authenticated";

// const UnauthenticatedComponent = dynamic(() =>
// import('../../components/unauthenticated')
// )
// const AuthenticatedComponent = dynamic(() =>
// import('../../components/authenticated')
// )

export default function Profile({ session }) {
  // check login status
  // const [session, loading] = useSession()
  //if (typeof window !== 'undefined' && loading) return <p>Loading...</p>

  //   if (!session) return <UnauthenticatedComponent />

  //   return <AuthenticatedComponent user={session.user} />
  return (
    <>
      <FPBanner title="Logged in Content" description="Hello" />
      <div className="bg-white-50 pt-10">
        <div className="max-w-11xl mx-auto grid grid-cols-12 gap-6 ">
          <div className="col-span-2 ">
            {session ? (
              <button onClick={() => signOut()}>Sign out</button>
            ) : (
              <button onClick={() => signIn()}>Sign in</button>
            )}
            {session && (
              <div>
                <p>Signed in as:{session.user.email}</p>
                <p>Name: {session.user.name}</p>
                <img src={session.user.image} alt={session.user.name} />
              </div>
            )}{" "}
            <h4 className="title">
              <Link href="./">
                <a>Your content</a>
              </Link>
            </h4>
        
            </div>
          <div className="col-span-8 bg-white">
          <div className="mx-auto text-base font-medium leading-relaxed text-gray-800">
            <h2 className="mx-auto mt-4 mb-4 text-xl font-sans font-semibold text-black">
              Logged in Content
            </h2>
          </div>
          <div className="mx-auto text-base font-xlleading-relaxed text-gray-800">
            <h3 className="mx-auto mt-4 mb-4 text-xl font-semibold text-black">
              Download this file{" "}
              <a
                href="/images/Umbrellas.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="p-2 pl-5 pr-5 bg-gray-500 text-gray-100 text-lg rounded-lg focus:border-4 border-gray-300"
              >
                Download FIle
              </a>
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

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
