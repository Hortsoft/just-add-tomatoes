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
          <div className="col-span-2 p-3">
            {session ? (
              <button className="title p-4 bg-blue-500 text-md rounded-lg focus:border-2 border-gray-300" onClick={() => signOut()}>Sign out</button>
            ) : (
              <button className="title p-4 bg-blue-500 text-md rounded-lg focus:border-2 border-gray-300" onClick={() => signIn()}>Sign in</button>
            )}

            {session && (
                <p className=" p-4 font-bold">
                  <Link href="./content/profile">
                    <a>Profile</a>
                  </Link><br />
                  <Link href="./">
                    <a>Your content</a>
                  </Link>
                </p>
            )}
          </div>
          <div className="col-span-8 bg-white">
            <div className="mx-auto text-base font-medium leading-relaxed text-gray-800">
              <h2 className="mx-auto mt-4 mb-4 text-xl font-sans font-semibold text-black">
                Logged in Content
              </h2>
            </div>
            <div className="mx-auto text-base font-xlleading-relaxed text-gray-800">
              {session && (
                <div>
                  <p><b>Signed in as:</b>{" "}{session.user.email}</p>
                  <p><b>Name:</b> {" "}{session.user.name}</p>
                  <img src={session.user.image} alt={session.user.name} />
                </div>
              )}{" "}
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
