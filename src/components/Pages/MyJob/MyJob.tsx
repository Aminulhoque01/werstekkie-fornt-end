"use client";
import { useEffect, useState } from "react";
import { Bookmark, MapPin, Clock, Briefcase } from "lucide-react";
import Image from "next/image";
import companyLogo from "@/assets/logo/companylogo.png"; // Replace with your actual logo
// import noJobsIllustration from "@/assets/images/no-jobs.png"; // Add an illustration for a better UI
import { useGetmyApplyJobQuery } from "@/redux/features/alljobSearch/alljobSearch";

export default function JobList() {
    const [savedJobs, setSavedJobs] = useState<string[]>([]);
    const { data, isLoading, isError, refetch } = useGetmyApplyJobQuery({});

    // Get applied jobs from API response
    const applyjob = data?.data?.attributes?.applications || [];

    
    // Function to save or remove job from savedJobs
    const toggleSaveJob = (id: string) => {
        setSavedJobs((prev) =>
            prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]
        );
    };

    

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching applied jobs!</p>;

    return (
        <div className="max-w-5xl mx-auto px-4 py-10 mt-20">
            
            <h2 className="text-2xl font-semibold mb-4 mt-10">My Applied Jobs</h2>

            {applyjob.length === 0 ? (
                <div className="flex flex-col items-center justify-center bg-white p-10 shadow-lg rounded-lg border">
                  
                    <h3 className="text-xl font-semibold text-gray-700">No Jobs Applied Yet</h3>
                    <p className="text-gray-500 mt-2 text-center">
                        You haven't applied to any jobs yet. Start exploring and apply for your dream job today!
                    </p>
                    <button
                        onClick={() => window.location.href = "/browser-job"}
                        className="mt-5 px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-all"
                    >
                        Browse Jobs
                    </button>
                </div>
            ) : (
                applyjob.map((job: any) => (
                    
                    <div
                        key={job._id}
                        className="bg-white p-5 md:p-6 rounded-lg shadow border flex flex-col md:flex-row items-start justify-between mt-5"
                    >
                       
                        {/* Left Side */}
                        
                        <div className="flex items-start space-x-4 w-full">
                            {/* Company Logo */}
                            <div className="flex-shrink-0">
                                <Image
                                    src={job.jobId.image || companyLogo}
                                    alt={job.jobId.company}
                                    width={64}
                                    height={64}
                                    className="w-12 h-12 md:w-16 md:h-16 rounded-full"
                                />
                            </div>

                            {/* Job Details */}
                            <div className="flex-1">
                                <h3 className="text-lg md:text-xl font-semibold">{job.jobId.title}</h3>
                                <div className="flex flex-wrap items-center text-sm md:text-base text-gray-500 gap-2 md:gap-4 mt-1">
                                    <span className="text-blue-500 font-medium">{job.jobId.company}</span>
                                    <span className="flex items-center">
                                        <MapPin size={14} className="mr-1" /> {job.jobId.location}
                                    </span>
                                    <span className="flex items-center">
                                        <Briefcase size={14} className="mr-1" /> {job.jobId.employmentType}
                                    </span>
                                    <span className="flex items-center">
                                        <Clock size={14} className="mr-1" /> Applied on {new Date(job.createdAt).toLocaleDateString()}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-sm md:text-base text-gray-600 mt-2">
                                    {job.jobId.description}
                                </p>

                                {/* Job Tags */}
                                <div className="flex items-center justify-between py-5">
                                    <div className="flex items-center space-x-5">
                                        <div className="border rounded-md px-3 py-2">
                                            {job.jobId.experinceLavel}
                                        </div>
                                        <div className="border rounded-md px-3 py-2">
                                            {job.jobId.employmentType}
                                        </div>
                                    </div>

                                    {/* Save Job Button */}
                                    <div className="justify-end">
                                        <button onClick={() => toggleSaveJob(job._id)} className="ml-4 md:ml-0 md:mt-5">
                                            <Bookmark
                                                className={`w-6 h-6 ${
                                                    savedJobs.includes(job._id) ? "text-blue-500" : "text-gray-400 hover:text-blue-500"
                                                }`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side (Salary & Save Button) */}
                        <div className="flex flex-row md:flex-col items-center md:items-end mt-4 md:mt-0 w-full md:w-auto">
                            <span className="text-lg md:text-xl font-semibold text-blue-500">
                                {job.jobId.salary}
                            </span>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
