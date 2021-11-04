import { signIn } from 'next-auth/client'

import FPBanner from "./FP_Banner";
export default function Unauthenticated() {
  return (

    <div>    <FPBanner title="profile" description="Your profile" />
      <p  className="text-lg tracking-tight hover:border-sbtOrange hover:text-sbtOrange ">You are not authenticated</p>
      <button onClick={signIn}>Sign In</button>
    </div>
  )
}