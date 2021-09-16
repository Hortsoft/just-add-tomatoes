import React from "react";

import ContactForm from "../components/ContactForm";
import FP_Banner from "../components/FP_Banner";

 
  

  // const subscribe = ... 
 
export default function SignupForm() {

  return (
    <>
      <FP_Banner title="Contact Us" description="Leave us a message please!" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 m-5">
        <div className="border p-4 text-center col-span-1 lg:col-span-2">
        <div class="p-8 ..."> 
         <h3 className="text-2xl font-semibold text-sbtBlue lg:text-3xl">
              Contact Address Details:
             </h3> 
            <p className="text-2xl font-semibold text-sbtBlue lg:text-xl p-4">  Hi</p>
            <p className="text-2xl font-semibold text-sbtBlue lg:text-xl p-4">  20 Something street</p>
            <p className="text-2xl font-semibold text-sbtBlue lg:text-xl p-4">  Some Suburb</p>
            </div>
        </div>
        <div className="border p-4 text-center col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-semibold text-sbtBlue lg:text-3xl">
              Fill out the form to stay in touch.
            </h3>
            <br />
            <ContactForm />  
          </div> 
          </div>
    </>
  );
}
