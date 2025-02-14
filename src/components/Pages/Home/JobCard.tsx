"use client";

import { useState } from "react";
import { FaMapLocation } from "react-icons/fa6";
import { PiBagSimpleDuotone } from "react-icons/pi";
import { GoClock } from "react-icons/go";
import { useGetAllJobsSearchQuery } from "@/redux/features/alljobSearch/alljobSearch";

// Define the job interface to specify the structure of the job object
interface Job {
  _id: string;
  title: string;
  salary: string;
  company: string;
  location: string;
  employmentType: string;
  posted: string;
  description: string;
  experinceLavel: string;
}

const JobCard = () => {
  const [page] = useState(1);
  const [title] = useState("");
  const limit = 6;

  // Fetch job data from the API using the Redux query
  const { data, error, isLoading } = useGetAllJobsSearchQuery({ page, limit, title });

  const alldata = data?.data?.attributes;

  // Handle loading and error states
  if (isLoading) return <p>Loading jobs...</p>;
  if (error) return <p>Error loading jobs!</p>;
  if (!data?.data?.attributes.length) return <p>No jobs found.</p>;

  return (
    <div className="max-w-[1400px] mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6">
        {/* Map over job data and render each job's details */}
        {alldata.map((job: Job) => (
          <div
            key={job._id}
            className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{job.title}</h2>
              <span className="text-blue-600 font-bold">${job.salary}</span>
            </div>
            <div className="text-gray-500 text-sm mt-2 flex flex-wrap items-center space-x-5">
              <div>
                <span className="text-blue-500">{job.company}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapLocation />
                <div>{job.location}</div>
              </div>
              <div className="flex items-center space-x-2">
                <PiBagSimpleDuotone />
                <div>{job.employmentType}</div>
              </div>
              <div className="flex items-center space-x-2">
                <GoClock />
                <div>{job.posted}</div>
              </div>
            </div>
            <p className="text-gray-700 text-sm mt-4 line-clamp-3">{job.description}</p>

            <div className="flex items-center space-x-5 py-5">
              <div className='border rounded-md px-3 py- py-2'>{job.experinceLavel}</div>
              <div className='border  rounded-md px-3 py-2'>{job.employmentType}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
