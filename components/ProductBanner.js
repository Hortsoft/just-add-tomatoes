import React from 'react'

export default function ProductBanner() {
    return (
        <div>
        <div className="flex   jumbotron shadow-2xl  text-white bg-gradient-to-r  from-sbtBlue   to-sbtOrange text-left">
          <div className="space-y-6 p-12 mt-4 ">
            <div>
              <h1 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10 justify-center">
                Our Store . 
              </h1>
            </div>
            <div>Covering a variety of subjects.</div>
            
          </div>
          <div className="ml-auto w-3/5">
            <img
              src="../images/prod_banner.jpg"
              className="float-right h-full"
              alt="blue door"
            />
          </div>
        </div>
      </div>
    )
}
