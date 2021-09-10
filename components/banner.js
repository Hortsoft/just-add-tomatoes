import React from 'react'

export default function Banner() {
    return (
        <div>
        <div className="flex   jumbotron shadow-2xl  text-white bg-gradient-to-r  from-sbtBlue   to-sbtOrange text-left">
          <div className="space-y-6 p-12 mt-4 ">
            <div>
              <h1 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10 justify-center">
                Welcome. 
              </h1>
            </div>
            <div>What shall we say. Gradient</div>
            <div>
              <button
                className=" text-sbtOrange bg-sbtBlue border border-solid border-sbtOrange hover:bg-sbtOrange hover:text-white active:bg-sbtOrange font-normal w-40  text-xl px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1   ease-linear transition-all duration-150"
                type="button"
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="ml-auto w-3/5">
            <img
              src="../images/blue-door.jpg"
              className="float-right h-full"
              alt="blue door"
            />
          </div>
        </div>
      </div>
    )
}
