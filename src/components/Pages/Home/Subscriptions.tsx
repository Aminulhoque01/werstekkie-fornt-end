import React from 'react';

const SubscribeSection: React.FC = () => {
  return (
    <div className=" bg-blue-700 lg:h-[250] text-white rounded-lg p-6 sm:p-10 flex flex-col sm:flex-row justify-between items-center relative overflow-hidden">
      {/* Background Bubbles */}
      <div className="absolute  left-4 w-20 h-20 bg-blue-500 opacity-50 rounded-full"></div>
      
      <div className="absolute  top-[-2px] right-[-2rem] w-20 h-20 bg-blue-500 opacity-80 rounded-full"></div>
      <div className="absolute top-5 left-4  w-10 h-10 bg-blue-500 opacity-50 rounded-full"></div>
      <div className="absolute top-10  right-12 w-10 h-10 bg-blue-500 opacity-50 rounded-full"></div>

      {/* Content */}
      <div className="z-10 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
          Subscribe to get the latest jobs
        </h2>
      </div>

      {/* Subscription Form */}
      <div className="mt-6 sm:mt-0 sm:ml-8 w-full sm:w-auto">
        <form className="flex flex-col sm:flex-row items-center bg-white rounded-lg overflow-hidden shadow-md">
          <input
            type="email"
            placeholder="abc@gmail.com"
            className="flex-grow w-full px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none border border-gray-300 sm:border-none sm:rounded-none"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 font-semibold w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
