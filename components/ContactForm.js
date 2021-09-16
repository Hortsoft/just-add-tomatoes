import { useState } from "react";

const ContactForm = () => { 

  const [input, setInput] = useState('');

  const subscribe = async (e) => {
    e.preventDefault(); // prevents page reload
    alert("You have subscribed!");
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <form className=" " method="post">
        <div className="-mx-3 md:flex mb-6">
        <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-md font-bold mb-2"
              for="first_name"
            >
              First Name
            </label>
            <input
              className="border  py-2 px-3 text-grey-darkest border-sbtOrange"
              id="firstname"
              type="text"
              aria-label="first name"
              placeholder="Enter first Name"
            />
               </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-md font-bold mb-2"
              for="first_name"
            >
              Last Name
            </label>
            <input
              className="border  py-2 px-3 text-grey-darkest border-sbtOrange "
              id="lastname"
              type="text"
              aria-label="Last Name"
              placeholder="Enter last name"
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-md font-bold mb-2"
              for="first_name"
            >
              Email Address
            </label>
            <input
              className="border  py-2 px-3 text-grey-darkest border-sbtOrange "
              id="email"
              type="email"
              aria-label="email address"
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <button
            onClick={subscribe}
              className="bg-sbtOrange hover:bg-sbtBlue   text-white shadow p-2 rounded-r"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
