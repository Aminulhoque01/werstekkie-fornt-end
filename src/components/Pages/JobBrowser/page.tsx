"use client";
import { useGetAllJobsSearchQuery } from "@/redux/features/alljobSearch/alljobSearch";
import { VscSave } from "react-icons/vsc";
import React, { useState } from "react";
import { FaMapLocation } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { PiBagSimpleDuotone } from "react-icons/pi";
import Link from "next/link";

const BrowseJobs: React.FC = () => {
  const [page, setPage] = useState(1);
  const [location, setLocation] = useState("");
  const [experinceLavel, setExperinceLavel] = useState("");
  const [workPlace, setWorkPlace] = useState("");
  const [category, setCategory] = useState("");
  const [employmentType, setEmploymentType] = useState("");

  // Store the applied filters separately
  const [appliedFilters, setAppliedFilters] = useState({
    page: 1,
    limit: 6,
    location: "",
    experinceLavel: "",
    workPlace: "",
    category: "",
    employmentType: "",
  });

  // Fetch jobs based on applied filters
  const { data, error, isLoading } = useGetAllJobsSearchQuery(appliedFilters);

  // Function to apply filters when the button is clicked
  const handleApplyFilters = () => {
    setAppliedFilters({
      page,
      limit: 6,
      location,
      experinceLavel,
      workPlace,
      category,
      employmentType,
    });
  };

  // Destructure the fetched data
  const jobs = data?.data?.attributes || [];

  return (
    <div className="mt-20">
      <div className=" py-8">
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
            {/* Location Input */}
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full sm:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Search location..."
            />

            {/* Job Type Dropdown */}
            <select
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
              className="w-full sm:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Freelance">Freelance</option>
            </select>

            {/* Experience Dropdown */}
            <select
              value={experinceLavel}
              onChange={(e) => setExperinceLavel(e.target.value)}
              className="w-full sm:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Experience Level</option>
              <option value="Entry Level">Internship Level</option>
              <option value="Mid Level">Junior Level</option>
              <option value="Senior Level">Senior Level</option>
              <option value="Senior Level">Regular Level</option>
              <option value="Senior Level">Expert Level</option>
            </select>

            {/* Filter Button */}
            <button
              onClick={handleApplyFilters}
              className="w-full sm:w-auto bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-6 mt-6">
        <div className="w-full lg:w-1/3 ">
          <div className="w-full max-w-sm bg-white shadow-md rounded-lg overflow-hidden sm: w-[300]">

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
            {/* Filters Section */}
            <div className="p-6">
              {/* Location Filter */}
              <div className="mb-4">
                <label className="block font-semibold mb-2 text-gray-700">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Filter */}
              <div className="mb-4">
                <label className="block font-semibold mb-2 text-gray-700">Category</label>
                <div className="flex gap-4 mt-4">
                  {["Design", "Development", "Fenance"].map((cat) => (
                    <div key={cat} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={category === cat}
                        onChange={() => setCategory(cat)}
                        id={cat}
                        className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                      />
                      <label htmlFor={cat} className="ml-2 text-gray-700">{cat}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Job Type Filter */}
              <div className="mb-4">
                <label className="block font-semibold mb-2 text-gray-700">Job Type</label>
                <div className="flex gap-4 mt-4">
                  {["Full Time", "Part Time"].map((type) => (
                    <div key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={employmentType === type}
                        onChange={() => setEmploymentType(type)}
                        id={type}
                        className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                      />
                      <label htmlFor={type} className="ml-2 text-gray-700">{type}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workplace Filter */}
              <div className="mb-4">
                <label className="block font-semibold mb-2 text-gray-700">Work Place</label>
                <div className="flex gap-4 mt-4">
                  {["onsite", "remote"].map((place) => (
                    <div key={place} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={workPlace === place}
                        onChange={() => setWorkPlace(place)}
                        id={place}
                        className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                      />
                      <label htmlFor={place} className="ml-2 text-gray-700">{place}</label>
                    </div>
                  ))}
                </div>
              </div>



              {/* Experience Level Filter */}
              <div className="mb-4">
                <label className="block font-semibold mb-2 text-gray-700">Experience Level</label>
                <div className="grid grid-cols-2 gap-4">
                  {["Expert", "Senior", "Junior", "Regular", "Internship"].map((level) => (
                    <div key={level} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={experinceLavel === level}
                        onChange={() => setExperinceLavel(level)}
                        id={level}
                        className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                      />
                      <label htmlFor={level} className="ml-2 text-gray-700">{level}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply Filter Button */}
              <button onClick={handleApplyFilters} className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 rounded-lg">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
        {/* Job Listings Section */}
        <div className="max-w-7xl mx-auto px-6 mt-6">
          {isLoading && <p>Loading jobs...</p>}

          {!isLoading && jobs.length === 0 && <p>No jobs found.</p>}

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
            {jobs.map((job: any) => (
              <Link key={job._id} href={`/browser-job/${job._id}`}>
                <div className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition-shadow duration-300 cursor-pointer">
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
                  <p className="text-gray-700 text-sm mt-4 line-clamp-3">
                    {job.description}
                  </p>
                  <div className="flex items-center justify-between py-5">
                    <div className="flex items-center space-x-5">
                      <div className="border rounded-md px-3 py-2">
                        {job.experinceLavel}
                      </div>
                      <div className="border rounded-md px-3 py-2">
                        {job.employmentType}
                      </div>
                    </div>
                    <div className="justify-end">
                      <VscSave />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseJobs;
