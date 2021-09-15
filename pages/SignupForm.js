import React from "react";
import ContactForm from "../components/ContactForm";
import FP_Banner from "../components/FP_Banner";

export default function SignupForm() {
  return (
    <>
      <FP_Banner title="Contact Us" description="Leave us a message please!" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 m-5">
        <div className="border p-4 text-center col-span-1 lg:col-span-2">
           <h3 className="text-2xl font-semibold text-sbtBlue lg:text-3xl">
              {" "}
              Contact Address Details:
             </h3> 
            <span className="text-2xl font-semibold text-sbtBlue lg:text-3xl">Hi</span>
          
        </div>
        <div className="border p-4 text-center col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-semibold text-sbtBlue lg:text-3xl">
              Fill out the form to stay in touch.
            </h3>
            <br />
            <ContactForm /> hi
          </div> 
          </div>
    </>
  );
}
