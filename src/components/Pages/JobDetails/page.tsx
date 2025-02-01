"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useParams } from "next/navigation";
import { useGetSingleJobQuery } from "@/redux/features/alljobSearch/alljobSearch";

const JobDetailsPage = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetSingleJobQuery(id, {
        skip: !id, // Prevents API call if jobId is null
    });



    console.log("Console Id", id)

    if (isLoading) return <p>Loading job details...</p>;
    if (error) return <p>Error loading job details.</p>;
    if (!data?.data) return <p>No job found.</p>;

    const job = data?.data?.attributes;
    console.log("Job Details", job)

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-gray-50 py-6 border-b mt-20"></header>

            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
                {/* Job Details Section */}
                <div className="w-full lg:w-2/3">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h1 className="text-3xl font-bold text-gray-800 ">{job.title}</h1>
                        {job.image && (
                            <Image
                                src={job.image}
                                alt={job.title}
                                width={600}
                                height={300}
                                className="w-full  object-cover rounded-lg mb-6 mt-10"
                            />
                        )}
                        <p className="text-gray-700 mb-4">{job.description}</p>
                    </div>
                </div>

                {/* Sidebar Section */}
                <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
                    <h2 className="text-lg font-bold mb-2">{job.title}</h2>
                    <p className="text-blue-600 text-sm mb-4">{job.company}</p>
                    <p className="text-sm text-gray-600 mb-6">
                        Interested candidates are encouraged to send their CV and a cover letter.
                    </p>

                    <div className="flex space-x-4 mb-6">
                        <Link href={`/apply-job/${job._id}`}>
                            <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                                Apply Now
                            </button>
                        </Link>
                        <button className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
                            Save Job
                        </button>
                    </div>

                    <ul className="space-y-4 text-sm text-gray-600">
                        <li className="flex items-center">
                            <span className="font-medium mr-2">Job Type:</span>
                            <span className="text-gray-900 font-semibold">{job.employmentType}</span>
                        </li>
                        <li className="flex items-center">
                            <span className="font-medium mr-2">Location:</span>
                            <span className="text-gray-900 font-semibold">{job.location}</span>
                        </li>
                        <li className="flex items-center">
                            <span className="font-medium mr-2">Salary:</span>
                            <span className="text-gray-900 font-semibold">${job.salary}</span>
                        </li>
                        <li className="flex items-center">
                            <span className="font-medium mr-2">Date Posted:</span>
                            <span className="text-gray-900 font-semibold">{job.posted}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;
