"use client";

import Image from 'next/image';
import heroImage from "@/assets/heroImage.svg";
import { useState } from 'react';

export default function Home() {
   const [title, setTitle] = useState("");

   // Fetch jobs based on search input
  //  const { data, error, isLoading } = useGetAllJobsSearchQuery({ title });

   return (
    <div className="mt-20 flex flex-col items-center justify-center w-full ">
      <div className="container mx-auto px-12 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-[1450px] px-4 md:px-8">
          
          {/* Left Content */}
          <div className='px-12'>
            <h3 className="text-blue-500 text-lg font-semibold mt-5 mb-10">
              Best jobs place
            </h3>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
              Find Your Dream Job Today
            </h1>
            <p className="text-gray-600 mt-4">
              Our platform simplifies your job search journey. Discover opportunities across various industries, apply with ease, and take the next step in your career.
            </p>

            {/* Search Form */}
            <div className="mt-6 w-full lg:w-96 py-5">
              <div className="flex items-center sm:flex-row bg-white p-4 rounded-lg shadow">
                <div className="relative w-full">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search for jobs..."
                  />
                  <svg
                    className="absolute w-5 h-5 text-gray-500 left-3 top-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M16.65 9.35a7.3 7.3 0 11-14.6 0 7.3 7.3 0 0114.6 0z"
                    />
                  </svg>
                </div>
                <button className="w-[55%] ml-4 bg-blue-500 text-white px-3 py-1 md:py-2 rounded-md hover:bg-blue-600">
                  Find Now
                </button>
              </div>
            </div>

           
          </div>

          {/* Right Image Section */}
          <div className="md:relative w-full md:h-[570px] lg:justify-end">
            <div className="md:absolute transform rotate-45 md:top-20 items-center lg:ml-8">
                <Image
                  src={heroImage}
                  alt="Job Search"
                  className="w-full h-full lg:h-[450] object-cover transform -rotate-45"
                />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
