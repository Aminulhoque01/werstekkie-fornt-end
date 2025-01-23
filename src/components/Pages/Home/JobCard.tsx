import React from "react";

const JobCard = () => {
  const jobs = Array(6).fill({
    title: "Digital Marketing Manager",
    company: "Ali Baba",
    location: "New York, NY",
    time: "1h ago",
    type: "Full time",
    level: "Senior",
    salary: "$13k",
    description:
      "Interested candidates are encouraged to send their CV and a cover letter with the subject line Application for Marketing Manager. Applications will be accepted until 23 February.",
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 p-4 sm:p-6 max-w-[1400px] mx-auto">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="border rounded-lg shadow-sm p-4 sm:p-6 bg-white hover:shadow-md transition-shadow duration-300"
        >
          {/* Job Title and Salary */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <span className="text-blue-600 font-bold">{job.salary}</span>
          </div>

          {/* Company, Location, and Time */}
          <div className="flex items-center text-gray-500 text-sm mt-2 flex-wrap">
            <span>{job.company}</span>
            <span className="mx-2 hidden sm:inline">•</span>
            <span>{job.location}</span>
            <span className="mx-2 hidden sm:inline">•</span>
            <span>{job.time}</span>
          </div>

          {/* Job Description */}
          <p className="text-gray-700 text-sm mt-4 line-clamp-3">
            {job.description}
          </p>

          {/* Job Tags and Bookmark Button */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                {job.level}
              </span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                {job.type}
              </span>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
