import { useState } from "react";

const EventRegistration = () => {
  const [input, setInput] = useState("");

  const registerToEvent = async (e) => {
    e.preventDefault(); // prevents page reload
    alert("You have subscribed!");
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <form className=" " method="post">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-md font-bold mb-2"
              for="event"
            >
              Event
            </label>
            <select
              id="event"
              name="event"
              autoComplete="event"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>Seminar on skateboarding. Session 1</option>
              <option>Seminar on skateboarding. Session 2</option>
              <option>Seminar on skiing. Session 1</option>
              <option>Seminar on skiing. Session 2</option>
              <option>Seminar on tennis. Session 1</option>
              <option>Seminar on tennis. Session 2</option>
            </select>
          </div>
        </div>{" "}
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
              onClick={registerToEvent}
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

export default EventRegistration;
