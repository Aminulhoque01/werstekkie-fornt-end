
import React from 'react';
import image1 from "@/assets/hero/image1.jpg"
import image2 from "@/assets/hero/image2.jpg"
import image3 from "@/assets/hero/image3.jpg"
import image4 from "@/assets/hero/image4.jpg"
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center lg:w-[1400] m-auto sm:w-[300] mt-10 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-blue-500 text-sm font-semibold mt-10">
              Best jobs place
            </h3>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 ">
              Find Your Dream Job Today
            </h1>
            <p className="text-gray-600 mt-4">
              Our platform simplifies your job search journey. Discover
              opportunities across various industries, apply with ease, and take
              the next step in your career. Employers can connect with skilled
              candidates quickly and efficiently.
            </p>

            {/* Search Form */}
            <div className="mt-6">
              <div className="flex items-center bg-white p-4 rounded-lg shadow">
                <select
                  className="flex-1 border-none focus:ring-0 focus:outline-none text-gray-600"
                  defaultValue="Category"
                >
                  <option value="Category" disabled>
                    Category
                  </option>
                  <option value="Tech">Tech</option>
                  <option value="Health">Health</option>
                  <option value="Education">Education</option>
                </select>
                <button className="ml-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                  Find Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-full h-[500px] md:h-[600px]">
            {/* Top Diamond */}
            <div className="absolute transform rotate-45 top-40 left-1/3 -translate-x-2/3">
              <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 overflow-hidden shadow-md rounded-md">
                <Image
                  src={image2}
                  alt="Image 1"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover transform -rotate-45"
                />
              </div>
            </div>
            {/* Left Diamond */}
            <div className="absolute transform rotate-45 top-1/2 -translate-y-1/4">
              <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 overflow-hidden shadow-md rounded-md">
                <Image
                  src={image1}
                  alt="Image 2"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover transform -rotate-45"
                />
              </div>
            </div>
            {/* Center Diamond */}
            <div className="absolute transform rotate-45 top-1/2 left-1/2 -translate-y-1/4 -translate-x-1/2">
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 overflow-hidden shadow-lg rounded-md">
                <Image
                  src={image4}
                  alt="Image 3"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover transform -rotate-45"
                />
              </div>
            </div>
            {/* Bottom Diamond */}
            <div className="absolute transform rotate-45 bottom-12 left-1/3 -translate-x-2/3">
              <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 overflow-hidden shadow-md rounded-md">
                <Image
                  src={image3}
                  alt="Image 4"
                  width={700}
                  height={700}
                  className="w-full h-full  -rotate-45"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
