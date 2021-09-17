import React, { useState, useEffect } from "react";
import { useAsync } from "react-async";
import FP_Banner from "../components/FP_Banner";
import EventRegistration from "../components/EventRegistration";
import Image from 'next/image';


const loadEvents = async () =>
  await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

export default function Events_Manager() {
  //set the initial state of the two event variables
  // const [eventdetail, setEventData] = useState(0);

  //const [eventdetail, setEventData] = useState([]);

  //   useEffect(() => {
  //     // fetchEventData();
  //     const url = "https://jsonplaceholder.typicode.com/todos";

  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(url);
  //         const json = await response.json();
  //         console.log(json);
  //         setEventData(json);
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  //  const fetchEventData = async () => {
  //    let response = await (
  //          fetch("https://jsonplaceholder.typicode.com/todos"))
  //          .then(response =>response.json())
  //           .then(setEventData(response))
  //         // .then(json => console.log(json))
  //  };

  const { data, error, isLoading } = useAsync({ promiseFn: loadEvents });
  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data)
    return (
      <>
        <FP_Banner
          title="Events"
          description="Below! are listed some of our current events"
        />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4 m-2">
          <div className="border p-8 text-center col-span-1 lg:col-span-2 ">
         <div class="">
              <h2 className="text-2xl p-4 font-semibold text-sbtBlue lg:text-3xl">
                Event List:
              </h2>
              {data.slice(0, 10).map((event) => (
                <div
                  key={event.id}
                  className=" "
                >
                  <div className="grid grid-cols-2 bg-green-100 p-5 pl-1  m-6 "> <div> <Image
          src={'/images/cafe_card.jpg'}
          width="400"
          height="200"
          alt="Be here"
      
        />  </div> <div >
                    <h1 className="text-xl font-bold">{event.title}</h1>
                    <h2 className="tracking-wide">Completed: {event.completed}</h2>
                    <button className="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">
                      Register
                    </button>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border p-4 text-center col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-semibold text-sbtBlue lg:text-3xl">
              Fill out the form to register for an event.
            </h3>
            <br />
            <EventRegistration />
          </div>
        </div>
      </>
    );
}
