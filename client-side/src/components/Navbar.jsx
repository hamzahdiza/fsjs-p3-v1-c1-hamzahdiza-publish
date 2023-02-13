import { useState } from "react";
import "../App.css";

function Navbar() {
  return (
    <div className="Navbar">
      <header aria-label="Site Header" className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <img src="https://cdn.shopify.com/s/files/1/0607/2841/0296/files/Logo_Erigo_Black_Resize.jpg?v=1659491149" className="h-[70px]" />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Site Nav">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a className="text-black-500 transition hover:text-grey-500/75 font-bold text-[16px]" href="/">
                      Erigo
                    </a>
                  </li>

                  <li>
                    <a className="text-black-500 transition hover:text-grey-500/75 font-bold text-[16px]" href="/">
                      Erigo-X
                    </a>
                  </li>

                  <li>
                    <a className="text-black-500 transition hover:text-grey-500/75 font-bold text-[16px]" href="/">
                      Campaign
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <a className="text-black-500 transition hover:text-grey-500/75  text-[16px]" href="/">
                Sign In
              </a>

              <div className="sm:flex sm:gap-2">
                <a href="#" className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 hover:text-gray-700">
                  <span className="sr-only">Search</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.5 17c1.71 0 3.287-.573 4.55-1.537l4.743 4.744a1 1 0 0 0 1.414-1.414l-4.744-4.744A7.5 7.5 0 1 0 9.5 17zM15 9.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="#000000" />
                  </svg>
                </a>

                <a href="#" className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 hover:text-gray-700">
                  <span className="sr-only">Like</span>
                  <svg fill="#404040" version="1.1" id="Capa_1" className="h-5 w-5" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 96.294 96.294" xmlSpace="preserve">
                    <g>
                      <path
                        d="M64.755,14.763c11.324,0,20.537,9.214,20.537,20.538c0,11.024-18.056,30.068-37.148,44.51
                          C29.066,65.389,11,46.337,11,35.301c0-11.324,9.213-20.538,20.537-20.538c3.836,0,7.572,1.062,10.806,3.07l5.803,3.605l5.804-3.604
                          C57.184,15.825,60.919,14.763,64.755,14.763 M64.755,3.763c-5.909,0-11.625,1.63-16.609,4.726
                          c-4.984-3.096-10.699-4.726-16.609-4.726C14.147,3.763,0,17.91,0,35.301c0,22.539,38.227,51.024,45.892,56.507
                          c0.663,0.473,1.442,0.723,2.255,0.723c0.816,0,1.599-0.252,2.257-0.727c7.664-5.483,45.89-33.981,45.89-56.503
                          C96.292,17.911,82.145,3.763,64.755,3.763L64.755,3.763z"
                      />
                    </g>
                  </svg>
                </a>

                <a href="#" className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 hover:text-gray-700">
                  <span className="sr-only">Like</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 30 30" stroke="currentColor" strokeWidth="2">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title></title>{" "}
                      <g id="Fill">
                        {" "}
                        <path d="M10,24a3,3,0,1,0,3,3A3,3,0,0,0,10,24Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,10,28Z"></path> <path d="M22,24a3,3,0,1,0,3,3A3,3,0,0,0,22,24Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,22,28Z"></path> <path d="M6.78,6,6.35,4.27A3,3,0,0,0,3.44,2H2V4H3.44a1,1,0,0,1,1,.76L8,19.24H8l.37,1.49A3,3,0,0,0,11.31,23H25V21H11.31a1,1,0,0,1-1-.76l-.12-.5L25,16.25a3,3,0,0,0,2.23-2.19l2-8.06Zm18.55,7.58a1,1,0,0,1-.75.73L9.73,17.8,7.28,8H26.72Z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </a>

                {/* <div className="hidden sm:flex">
                  <a className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600" href="/">
                    Register
                  </a>
                </div> */}
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-black-600 transition hover:text-black-600/75">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Navbar;
