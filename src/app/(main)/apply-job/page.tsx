import React from "react";

const JobPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-30 pt-20">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Job Details Section */}
        <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
          {/* Job Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Digital Marketing Manager
          </h1>
          <a href="#" className="text-blue-600 hover:underline text-sm mb-4 block">
            Ali Baba
          </a>
          {/* Job Tags */}
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
              Senior
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
              Full Time
            </span>
          </div>
          {/* Job Description */}
          <p className="text-gray-700 mb-6">
            The Alstudio Design team has a vision to establish a trusted platform
            that enables productive and healthy enterprises in a world of digital
            and remote everything, constantly changing work patterns and norms,
            and the need for organizational resiliency.
          </p>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Essential Knowledge, Skills, and Experience
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>A portfolio demonstrating well-thought-through and polished end-to-end customer journeys</li>
            <li>5+ years of industry experience in interactive design and/or visual design</li>
            <li>Excellent interpersonal skills</li>
            <li>Proficiency in design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
          </ul>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Preferred Experience</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Deeply understand the technology and features of the product</li>
            <li>Provide human and business impact and insights for products</li>
            <li>Ability to create deliverables for user research and usability testing</li>
          </ul>
        </div>

        {/* Application Form Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Apply for this Job</h2>
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Phone Number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Job Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Types of Jobs */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Types of Jobs <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full Time | Part Time"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                placeholder="Write here..."
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            {/* CV/Resume */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Your CV/Resume <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
