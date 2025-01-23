import React from "react";
import job from "@/assets/job details/job.jpg"
import Image from "next/image";
import Link from "next/link";


const JobDetailsPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <header className="bg-gray-50 py-6 border-b mt-20">

            </header>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
                {/* Job Details Section */}

                <div className="w-full lg:w-2/3">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h1 className="text-3xl font-bold text-gray-800">
                            Digital Marketing Manager
                        </h1>
                        <Image
                            src={job}
                            alt="Job image"
                            className="w-full h-64 object-cover rounded-lg mb-6"
                        />
                        <h2 className="text-xl font-semibold mb-4">
                            Essential Knowledge, Skills, and Experience
                        </h2>
                        <p className="text-gray-700 mb-4">
                            The Alstudio Design team has a vision to establish a trusted
                            platform that enables productive and healthy enterprises in a
                            world of digital and remote working. This candidate will have
                            experience in the development of high-quality interactive designs
                            and have worked with various design tools such as Figma, Sketch,
                            and Adobe Suite.
                        </p>
                        <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                            <li>A portfolio demonstrating strong visual design and UI skills.</li>
                            <li>5+ years of experience in design and interactive platforms.</li>
                            <li>Proficiency in Figma, Sketch, Photoshop, and Illustrator.</li>
                            <li>Strong communication and collaboration skills.</li>
                        </ul>
                        <h3 className="text-lg font-semibold mb-2">Preferred Experience:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Experience with product design and development workflows.</li>
                            <li>Familiarity with agile methodologies and tools like Jira.</li>
                            <li>Ability to communicate effectively with cross-functional teams.</li>
                        </ul>
                    </div>
                </div>

                {/* Sidebar Section */}
                <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
                    {/* Title */}
                    <h2 className="text-lg font-bold mb-2">Digital Marketing Manager</h2>
                    <a href="#" className="text-blue-600 text-sm hover:underline mb-4 block">
                        Ali Baba
                    </a>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-6">
                        Interested candidates are encouraged to send their CV and a cover letter
                        with the subject.
                    </p>

                    {/* Buttons */}
                    <div className="flex space-x-4 mb-6">
                        <Link href="apply-job"><button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Apply Now
                        </button></Link>
                        <button className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
                            Save Job
                        </button>
                    </div>

                    {/* Job Details */}
                    <ul className="space-y-4 text-sm text-gray-600">
                        <li className="flex items-center">
                            <span className="font-medium mr-2">Job Type:</span>
                            <span className="text-gray-900 font-semibold">Full Time</span>
                        </li>
                        <li className="flex items-center">
                            <span className="font-medium mr-2">Location:</span>
                            <span className="text-gray-900 font-semibold">New York, Texas</span>
                        </li>
                        <li className="flex items-center">
                            <span className="font-medium mr-2">Workplace:</span>
                            <span className="text-gray-900 font-semibold">Onsite</span>
                        </li>
                        <li className="flex items-center">
                            <span className="font-medium mr-2">Salary:</span>
                            <span className="text-gray-900 font-semibold">$34K</span>
                        </li>
                        <li className="flex items-center">
                            <span className="font-medium mr-2">Date Posted:</span>
                            <span className="text-gray-900 font-semibold">2 Days ago</span>
                        </li>
                        <li className="flex items-center">
                            <span className="font-medium mr-2">Expiration Date:</span>
                            <span className="text-gray-900 font-semibold">April 8, 2022</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default JobDetailsPage;
