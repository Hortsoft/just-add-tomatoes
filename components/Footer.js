import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; 
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import { faFacebook } from "@fortawesome/free-brands-svg-icons"; 

export default function Footer() {
    return (
      <div>
      <footer className="pb-10 mt-6 bg-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="text-2xl font-bold">Quick links</h2>
              <nav className="list-none mb-10">
              
                <li>
                  {" "}
                  <Link href="/SignupForm">
                  <a className="text-xl text-gray-600 hover:text-bold hover:text-sbtOrange hover:underline">Subscribe</a>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/MSForms">
                  <a className="text-xl text-gray-600 hover:text-bold hover:text-sbtOrange hover:underline">MS Forms</a>
                  </Link>
                </li>
                  <li>
                  {" "}
                  <Link href="/Video">
                  <a className="text-xl text-gray-600 hover:text-bold hover:text-sbtOrange hover:underline">Video</a>
                  </Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                  <h2 className="text-2xl font-bold">Find us at</h2>
              <div className="inline-grid grid-cols-3 gap-x-3 m-2">
                <div className="gap-px">  
                  <Link href="/">
                    <a className="text-gray-600 hover:text-orange-900 text-xl">
                      <FontAwesomeIcon icon={faTwitter} />   
                    </a>
                  </Link>
                </div>
                <div className="gap-px">   
                  <Link href="/">
                  <a className="text-gray-600 hover:text-orange-900 text-xl">
                    <FontAwesomeIcon icon={faLinkedin} /> 
                    </a>
                  </Link>
                </div>
                <div className="gap-px"> 
                  <Link href="/">
                  <a className="text-gray-600 hover:text-orange-900 text-xl">
                    <FontAwesomeIcon icon={faFacebook} /> 
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="text-2xl font-bold">
                Subscribe to the Newsletter
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <form>
                    <label className="leading-7 text-sm text-gray-600">
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <button
                      className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                      type="submit"
                    >
                      Register
                    </button>
                  </form>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    )
}
