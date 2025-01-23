"use client";
import { Button } from 'antd/lib';
import Link from 'next/link';
import React from 'react';

// const BrowseJobs: React.FC = () => {



//   return (
//     <div className="bg-gray-100 min-h-screen mt-20 lg:w-[1400] m-auto mb-10 ">
//       {/* Header Section */}
//       <div className="bg-gray-50 py-8  ">
//         <div className="max-w-6xl mx-auto px-6">
//           {/* Title Section */}
//           <div className="mb-6">
//             <h1 className="text-3xl font-bold text-gray-800">
//               Browse Jobs That Fit <br /> Your Future
//             </h1>
//             <p className="text-gray-600 mt-2">
//               Explore a wide range of job opportunities tailored to your skills
//               and preferences.
//             </p>
//           </div>

//           {/* Search Form */}
//           <div className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center gap-4">
//             {/* Job Title Input */}
//             <input
//               type="text"
//               placeholder="UI Designer"
//               className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* Job Type Dropdown */}
//             <div className="w-full sm:w-1/4 relative">
//               <select
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="FullTime">Full Time</option>
//                 <option value="PartTime">Part Time</option>
//                 <option value="Freelance">Freelance</option>
//               </select>
//               <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
//                 🏠
//               </span>
//             </div>

//             {/* Experience Dropdown */}
//             <div className="w-full sm:w-1/4 relative">
//               <select
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="Experience">Experience</option>
//                 <option value="EntryLevel">Entry Level</option>
//                 <option value="MidLevel">Mid Level</option>
//                 <option value="SeniorLevel">Senior Level</option>
//               </select>
//               <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
//                 ⭐
//               </span>
//             </div>

//             {/* Search Button */}
//             <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
//               Find Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Filters and Job List */}
//       <div className="w-full max-w-sm bg-white shadow-md rounded-lg overflow-hidden sm: w-[300]">
//         {/* Job Reminder Section */}
//         <div className="bg-blue-700 text-white p-6">
//           <h3 className="font-bold text-lg">Set Job Reminder</h3>
//           <p className="text-sm mt-2">
//             Enter your email address and get new job alerts weekly
//           </p>
//           <div className="mt-4">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button className="mt-3 w-full bg-blue-600 hover:bg-blue-800 text-white py-2 rounded-lg">
//               Submit
//             </button>
//           </div>
//         </div>

//         {/* Filter Section */}
//         <div className="p-6">
//           {/* Location Filter */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-2 text-gray-700">
//               Location
//             </label>
//             <input
//               type="text"
//               placeholder="Location"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Category Filter */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-2 text-gray-700">
//               Category
//             </label>
//             <input
//               type="text"
//               placeholder="UI/UX Design"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Job Type Filter */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-2 text-gray-700">Job Type</label>
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="fullTime"
//                   className="h-4 w-4 text-blue-500 focus:ring-blue-500"
//                 />
//                 <label htmlFor="fullTime" className="ml-2 text-gray-700">
//                   Full Time
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="partTime"
//                   className="h-4 w-4 text-blue-500 focus:ring-blue-500"
//                 />
//                 <label htmlFor="partTime" className="ml-2 text-gray-700">
//                   Part Time
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Workplace Filter */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-2 text-gray-700">
//               Work Place
//             </label>
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="onsite"
//                   className="h-4 w-4 text-blue-500 focus:ring-blue-500"
//                 />
//                 <label htmlFor="onsite" className="ml-2 text-gray-700">
//                   Onsite
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="remote"
//                   className="h-4 w-4 text-blue-500 focus:ring-blue-500"
//                 />
//                 <label htmlFor="remote" className="ml-2 text-gray-700">
//                   Remote
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Experience Level Filter */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-2 text-gray-700">
//               Experience Level
//             </label>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="expert"
//                   className="h-4 w-4 text-blue-500 focus:ring-blue-500"
//                 />
//                 <label htmlFor="expert" className="ml-2 text-gray-700">
//                   Expert
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="senior"
//                   className="h-4 w-4 text-blue-500 focus:ring-blue-500"
//                 />
//                 <label htmlFor="senior" className="ml-2 text-gray-700">
//                   Senior
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="junior"
//                   className="h-4 w-4 text-blue-500 focus:ring-blue-500"
//                 />
//                 <label htmlFor="junior" className="ml-2 text-gray-700">
//                   Junior
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="regular"
//                   className="h-4 w-4 text-blue-500 focus:ring-blue-500"
//                 />
//                 <label htmlFor="regular" className="ml-2 text-gray-700">
//                   Regular
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="internship"
//                   className="h-4 w-4 text-blue-500 focus:ring-blue-500"
//                 />
//                 <label htmlFor="internship" className="ml-2 text-gray-700">
//                   Internship
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Apply Filter Button */}
//           <button className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 rounded-lg">
//             Apply Filter
//           </button>


//         </div>


//       </div>




//     </div>
//   );
// };







const BrowseJobs: React.FC = () => {
  const jobs = [
    {
      id: 1,
      title: "Digital Marketing Manager",
      description:
        "Interested candidates are encouraged to send their CV and a cover letter to apply for the position of Marketing Manager. Applications will be accepted until 23 February.",
      level: "Senior",
      type: "Full Time",
      location: "Remote",
      salary: "$13K",
    },
    // Repeat or generate additional job listings
  ];

  return (
    <div className="bg-gray-100">
      <div className="bg-gray-50 py-8  ">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title Section */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Browse Jobs That Fit <br /> Your Future
            </h1>
            <p className="text-gray-600 mt-2">
              Explore a wide range of job opportunities tailored to your skills
              and preferences.
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center gap-4">
            {/* Job Title Input */}
            <input
              type="text"
              placeholder="UI Designer"
              className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Job Type Dropdown */}
            <div className="w-full sm:w-1/4 relative">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="FullTime">Full Time</option>
                <option value="PartTime">Part Time</option>
                <option value="Freelance">Freelance</option>
              </select>
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                🏠
              </span>
            </div>

            {/* Experience Dropdown */}
            <div className="w-full sm:w-1/4 relative">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Experience">Experience</option>
                <option value="EntryLevel">Entry Level</option>
                <option value="MidLevel">Mid Level</option>
                <option value="SeniorLevel">Senior Level</option>
              </select>
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                ⭐
              </span>
            </div>

            {/* Search Button */}
            <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Find Now
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-6 mt-6">
        {/* Filters Section */}
        <div className="w-full lg:w-1/3">
          {/* Filters and Job List */}
          <div className="w-full max-w-sm bg-white shadow-md rounded-lg overflow-hidden sm: w-[300]">
            {/* Job Reminder Section */}
            <div className="bg-blue-700 text-white p-6">
              <h3 className="font-bold text-lg">Set Job Reminder</h3>
              <p className="text-sm mt-2">
                Enter your email address and get new job alerts weekly
              </p>
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="mt-3 w-full bg-blue-600 hover:bg-blue-800 text-white py-2 rounded-lg">
                  Submit
                </button>
              </div>
            </div>

            {/* Filter Section */}
            <div className="p-6">
              {/* Location Filter */}
              <div className="mb-4">
                <label className="block font-semibold mb-2 text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Filter */}
              <div className="mb-4">
                <label className="block font-semibold mb-2 text-gray-700">
                  Category
                </label>
                <input
                  type="text"
                  placeholder="UI/UX Design"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Job Type Filter */}
              <div className="mb-4">
                <label className="block font-semibold mb-2 text-gray-700">Job Type</label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="fullTime"
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor="fullTime" className="ml-2 text-gray-700">
                      Full Time
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="partTime"
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor="partTime" className="ml-2 text-gray-700">
                      Part Time
                    </label>
                  </div>
                </div>
              </div>

              {/* Workplace Filter */}
              <div className="mb-4">
                <label className="block font-semibold mb-2 text-gray-700">
                  Work Place
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="onsite"
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor="onsite" className="ml-2 text-gray-700">
                      Onsite
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remote"
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor="remote" className="ml-2 text-gray-700">
                      Remote
                    </label>
                  </div>
                </div>
              </div>

              {/* Experience Level Filter */}
              <div className="mb-4">
                <label className="block font-semibold mb-2 text-gray-700">
                  Experience Level
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="expert"
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor="expert" className="ml-2 text-gray-700">
                      Expert
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="senior"
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor="senior" className="ml-2 text-gray-700">
                      Senior
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="junior"
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor="junior" className="ml-2 text-gray-700">
                      Junior
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="regular"
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor="regular" className="ml-2 text-gray-700">
                      Regular
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="internship"
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor="internship" className="ml-2 text-gray-700">
                      Internship
                    </label>
                  </div>
                </div>
              </div>

              {/* Apply Filter Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 rounded-lg">
                Apply Filter
              </button>


            </div>


          </div>
        </div>

        {/* Job Listings Section */}
        <div className="w-full lg:w-2/3">
          {/* fond-job-post  */}
          <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <p>Showing 1-40 of 1200 jobs</p>
              <select className="border px-3 py-2 rounded-md">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>

            {/* Job Cards */}
            <div className="space-y-4 mb-8">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.description}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                        {job.level}
                      </span>
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                        {job.type}
                      </span>
                      <Button className='bg-greend m-right'>see more</Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{job.salary}</p>
                  </div>
                 
                </div>
              ))}
            </div>
            <div className="space-y-4 mb-8">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.description}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                        {job.level}
                      </span>
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                        {job.type}
                      </span>
                      
                      <Link href="job-details"><Button  className='bg-greend m-right'>see more</Button></Link>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{job.salary}</p>
                  </div>
                 
                </div>
              ))}
            </div>
            <div className="space-y-4 mb-8">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.description}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                        {job.level}
                      </span>
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                        {job.type}
                      </span>
                      <Button className='bg-greend m-right'>see more</Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{job.salary}</p>
                  </div>
                 
                </div>
              ))}
            </div>
            <div className="space-y-4 mb-8">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.description}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                        {job.level}
                      </span>
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                        {job.type}
                      </span>
                      <Button className='bg-greend m-right'>see more</Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{job.salary}</p>
                  </div>
                 
                </div>
              ))}
            </div>
            <div className="space-y-4 mb-8">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.description}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                        {job.level}
                      </span>
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                        {job.type}
                      </span>
                      <Button className='bg-greend m-right'>see more</Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{job.salary}</p>
                  </div>
                 
                </div>
              ))}
            </div>
            <div className="space-y-4 mb-8">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.description}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                        {job.level}
                      </span>
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                        {job.type}
                      </span>
                      <Button className='bg-greend m-right'>see more</Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{job.salary}</p>
                  </div>
                 
                </div>
              ))}
            </div>
            <div className="space-y-4 mb-8">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.description}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                        {job.level}
                      </span>
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                        {job.type}
                      </span>
                      <Button className='bg-greend m-right'>see more</Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{job.salary}</p>
                  </div>
                 
                </div>
              ))}
            </div>
            <div className="space-y-4 mb-8">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.description}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                        {job.level}
                      </span>
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                        {job.type}
                      </span>
                      <Button className='bg-greend m-right'>see more</Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{job.salary}</p>
                  </div>
                 
                </div>
              ))}
            </div>
            <div className="space-y-4 mb-8">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.description}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                        {job.level}
                      </span>
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                        {job.type}
                      </span>
                      <Button className='bg-greend m-right'>see more</Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{job.salary}</p>
                  </div>
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseJobs;