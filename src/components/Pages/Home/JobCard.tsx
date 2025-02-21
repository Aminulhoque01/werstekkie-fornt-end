"use client";

import { useState } from "react";
import { FaMapLocation } from "react-icons/fa6";
import { PiBagSimpleDuotone } from "react-icons/pi";
import { GoClock } from "react-icons/go";
import { useGetAllJobsSearchQuery } from "@/redux/features/alljobSearch/alljobSearch";

import { Button, Image, Spin } from "antd";
import Link from "next/link"
import { ImageBaseUrl } from "@/redux/features/alljobSearch/ImageBaseUrl";
import { clsx } from 'clsx';

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
  image: string;
}

const JobCard = () => {
  const [page] = useState(1);
  const [title] = useState("");
  const limit = 6;

  // Fetch job data from the API using the Redux query
  const { data, error, isLoading } = useGetAllJobsSearchQuery({ page, limit, title });

  const alldata = data?.data?.attributes;
  console.log(`home data`, alldata)

  const getFullImageUrl = (path: string | undefined): string => {
    if (!path) return "/default-image.jpg";
    if (path.startsWith("http")) return path;
    return `${ImageBaseUrl}${path}`;
  };

  // Handle loading and error states
  if (isLoading) return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Spin tip="Loading jobs..." size="large" className="text-white" />
    </div>
  );
  if (error) return <p>Error loading jobs!</p>;
  if (!data?.data?.attributes.length) return <p>No jobs found.</p>;

  return (
    <div>
      <div className="max-w-[1400px] mx-auto mt-5">





        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6">
          {alldata.map((job: Job) => (
            <div
              key={job._id}
              className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Right Side: Job Salary (Positioned Top-Right) */}
              <div className="absolute top-2 mt-5 right-2 text-blue-600 font-bold">
                ${job.salary}
              </div>

              <div className="flex items-center space-x-4">
                {/* Left Side: Image */}
                <div className="flex-shrink-0">
                  <Image
                    src={getFullImageUrl(job.image)}
                    alt="Company Logo"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full"
                  />
                </div>

                <div className="flex-grow lg:flex justify-between items-center space-x-4">
                  {/* Middle: Job Details */}
                  <div className="sm:flex-grow">
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <div className="flex flex-wrap items-center space-x-2 text-gray-500 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{job.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaMapLocation />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <PiBagSimpleDuotone />
                        <span>{job.employmentType}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <GoClock />
                        <span>{job.posted}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm mt-4 line-clamp-3">{job.description}</p>

              <div className="flex items-center space-x-5 py-4">
                <div className="border rounded-md px-4 py-2 text-sm">{job.experinceLavel}</div>
                <div className="border rounded-md px-4 py-2 text-sm">{job.employmentType}</div>
              </div>
            </div>
          ))}
        </div>




      </div>
      <div className="flex justify-center mt-6">
        <Link href="/browser-job"><Button className="text-center bg-blue-500">See More Jobs</Button></Link>
      </div>
    </div>
  );
};

export default JobCard;
