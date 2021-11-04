import { useSession, signOut } from 'next-auth/client'

import FPBanner from "./FP_Banner";

export default function Authenticated({ user }) {

  const [session, loading] = useSession();

  return (

    <div>    <FPBanner title="profile" description="Your profile" />
        <p  className="text-lg tracking-tight hover:border-sbtOrange hover:text-sbtOrange ">You are authenticated  </p>
        {session && (
    <div>
      <p>Signed in as {session.user.email}</p>
      <p>Name {session.user.name}</p>
      <img src={session.user.image} alt={session.user.name} />
    </div>
  )}
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}