

"use client";

import Image from "next/image";
import { useState } from "react";
import companyLogo from "@/assets/logo/companylogo.png";
import { Bookmark, Briefcase, Clock, MapPin } from "lucide-react";
import { useGetSaveJobQuery } from "@/redux/features/alljobSearch/alljobSearch";

export default function SavedJobs() {
    const [sortBy, setSortBy] = useState("Newest Post");

    // Fetch Saved Jobs from API
    const { data, error, isLoading } = useGetSaveJobQuery({});

    // Ensure data structure is correct
    const savedJobs = data?.data?.attributes || []; // If `attributes` is undefined, default to an empty array
 

    if (isLoading) return <p>Loading saved jobs...</p>;
    if (error) return <p>Error loading saved jobs.</p>;
    if (!savedJobs.length) return <p>No saved jobs found.</p>; // Proper check for empty list

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-20">
            {/* Header */}
            <h1 className="text-2xl sm:text-3xl font-bold mt-10">My Saved Jobs</h1>
            <p className="text-gray-600 text-sm sm:text-base mt-1">
                Showing {savedJobs.length} saved jobs
            </p>

            {/* Sort Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
                <span className="hidden sm:block"></span>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-600 text-sm">Sort By:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border rounded-md p-2 text-sm sm:text-base"
                    >
                        <option>Newest Post</option>
                        <option>Oldest Post</option>
                    </select>
                </div>
            </div>

            {/* Job List */}
            <div className="mt-6 grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                {savedJobs.map((job:any, index:number) => (
                    <div
                        key={job._id || index} // Fallback key for missing `_id`
                        className="bg-white p-5 md:p-6 rounded-lg shadow border flex flex-col md:flex-row items-start justify-between mt-5"
                    >
                        {/* Left Side */}
                        <div className="flex items-start space-x-4 w-full">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <Image
                                    src={companyLogo}
                                    alt="Company Logo"
                                    width={64}
                                    height={64}
                                    className="w-12 h-12 md:w-16 md:h-16"
                                />
                            </div>

                            {/* Job Details */}
                            <div className="flex-1">
                                <h3 className="text-lg md:text-xl font-semibold">{job.title}</h3>
                                <div className="flex flex-wrap items-center text-sm md:text-base text-gray-500 gap-2 md:gap-4 mt-1">
                                    <span className="text-blue-500 font-medium">{job.company}</span>
                                    <span className="flex items-center">
                                        <MapPin size={14} className="mr-1" /> {job.location}
                                    </span>
                                    <span className="flex items-center">
                                        <Briefcase size={14} className="mr-1" /> {job.type}
                                    </span>
                                    <span className="flex items-center">
                                        <Clock size={14} className="mr-1" /> {job.posted}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-sm md:text-base text-gray-600 mt-2">
                                    {job.description}
                                </p>

                                {/* Job Tags */}
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
                                        <button>
                                            <Bookmark className="w-6 h-6 text-blue-500" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side (Salary) */}
                        <div className="flex flex-row md:flex-col items-center md:items-end mt-4 md:mt-0 w-full md:w-auto">
                            <span className="text-lg md:text-xl font-semibold text-blue-500">
                                {job.salary}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
