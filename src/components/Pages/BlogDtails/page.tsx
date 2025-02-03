'use client';

import Image from 'next/image';
import BlogImage from "@/assets/blogImage.jpg"
import { useParams } from 'next/navigation';

export default function BlogPost() {
    const params = useParams();
    
    const { id } = params;
    return (
        <div className="min-h-screen px-4 py-8  mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 w-full md:w-[650%] lg:w-[65%] m-auto">

                {/* Left Side - Blog Content */}
                <div className="lg:col-span-2 ">
                    <Image
                        src={BlogImage}
                        alt="Blog Image"
                        width={800}
                        height={400}
                        className=" rounded-lg"
                    />
                    <p className="text-gray-500 text-sm mt-4">6 Sep, 2022</p>
                    <div className="flex space-x-2 mt-2">
                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Job</span>
                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Best</span>
                    </div>
                    <h1 className="text-3xl font-bold mt-4">5 Essential Tips to Land Your Dream Job in 2024</h1>

                    {/* Blog Content */}
                    <div className="w-full  p-6 bg-white">
                        {/* Blog Content Section */}
                        <div className="space-y-6 text-gray-800 leading-relaxed">
                            <div>
                                <h2 className="text-xl font-semibold">1. Tailor Your Resume and Cover Letter</h2>
                                <p>
                                    Your resume and cover letter are your first impression on a potential employer. Make them count!
                                </p>
                                <ul className="list-disc list-inside mt-2 text-gray-700">
                                    <li><strong>Customize for Each Job:</strong> Highlight skills and experiences that align with the job description.</li>
                                    <li><strong>Use Keywords:</strong> Many companies use Applicant Tracking Systems (ATS) to screen resumes.</li>
                                    <li><strong>Showcase Achievements:</strong> Instead of listing responsibilities, focus on measurable accomplishments.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold">2. Build a Strong Online Presence</h2>
                                <p>
                                    Employers often research candidates online before making hiring decisions. Make sure your online presence works in your favor.
                                </p>
                                <ul className="list-disc list-inside mt-2 text-gray-700">
                                    <li><strong>Optimize Your LinkedIn Profile:</strong> Use a professional photo, write a compelling headline, and keep your experience and skills up to date.</li>
                                    <li><strong>Showcase Your Work:</strong> Consider a personal portfolio or share projects on platforms like GitHub, Behance, or Medium.</li>
                                    <li><strong>Clean Up Social Media:</strong> Ensure your public profiles reflect a professional image.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold">3. Network Strategically</h2>
                                <p>Networking remains one of the most effective ways to find job opportunities.</p>
                                <ul className="list-disc list-inside mt-2 text-gray-700">
                                    <li><strong>Attend Industry Events:</strong> Join webinars, conferences, or local meetups to connect with professionals.</li>
                                    <li><strong>Leverage LinkedIn:</strong> Reach out to alumni, former colleagues, or industry leaders for informational interviews.</li>
                                    <li><strong>Follow Up:</strong> Send a thank-you note or connect on LinkedIn after meeting someone.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold">4. Upskill and Stay Relevant</h2>
                                <p>The job market is constantly evolving, and employees value candidates who commit to learning.</p>
                                <ul className="list-disc list-inside mt-2 text-gray-700">
                                    <li><strong>Take Online Courses:</strong> Platforms like Coursera, Udemy, and LinkedIn Learning offer courses.</li>
                                    <li><strong>Earn Certifications:</strong> Especially valuable in fields like IT, project management, and finance.</li>
                                    <li><strong>Stay Informed:</strong> Follow industry blogs, podcasts, and news.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold">5. Ace the Interview</h2>
                                <p>The interview is your chance to shine and show why you’re the best fit for the role.</p>
                                <ul className="list-disc list-inside mt-2 text-gray-700">
                                    <li><strong>Practice Common Questions:</strong> Prepare answers for common interview questions.</li>
                                    <li><strong>Ask Thoughtful Questions:</strong> Show interest by asking about the team or company culture.</li>
                                    <li><strong>Follow Up:</strong> Send a thank-you email within 24 hours.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold">Final Thoughts</h2>
                                <p>
                                    Landing your dream job takes effort, preparation, and persistence. By tailoring your application, building a strong online presence, networking, upskilling, and acing the interview, you’ll be well on your way to success.
                                </p>
                                <p className="mt-2">
                                    Each “next step” brings you closer to a “yes.” Keep pushing forward, and your dream job will be within reach!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Sidebar */}
                <div className="space-y-8 ">
                    {/* Search Box */}
                    <div className="w-full p-4 bg-white shadow-md rounded-lg space-y-6">
                        {/* Search Box */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                            />
                            <span className="absolute top-2 right-3 text-gray-400">🔍</span>
                        </div>

                        {/* Category Section */}
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="font-semibold mb-3">Category</h3>
                            <div className="space-y-2">
                                {["Design", "Finance", "Software"].map((category, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm text-gray-700"
                                    >
                                        <span>{category}</span>
                                        <span className="bg-gray-300 text-xs px-2 py-1 rounded">120</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tags */}
                        <div>
                            <h3 className="font-semibold mb-3">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Design", "Inspire", "New Trend", "Best Job", "New Job"].map(
                                    (tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Latest Blog Section */}
                        <div>
                            <h3 className="font-semibold mb-3">Latest Blog</h3>
                            <div className="space-y-3">
                                {[1, 2, 3, 4, 5].map((_, index) => (
                                    <div key={index} className="flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm">
                                        <Image
                                            src={BlogImage}
                                            alt="Blog Image"
                                            width={60}
                                            height={60}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div className="text-sm">
                                            <h4 className="font-semibold">5 Essential Tips to Land Your Dream Job in 2024</h4>
                                            <p className="text-gray-500 text-xs">In today's competitive job market...</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* Job Reminder */}
                    <div className="bg-blue-300 p-6 rounded-lg shadow-md text-white relative">
                        {/* Circle Design Element */}
                        <div className="absolute top-2 right-4 w-8 h-8 bg-blue-600 rounded-full"></div>

                        {/* Heading & Description */}
                        <h3 className="font-semibold text-lg">Set Job reminder</h3>
                        <p className="text-sm mt-1">Enter your email address and get new job alert weekly</p>

                        {/* Email Input Field */}
                        <div className="mt-4 relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring focus:ring-blue-400"
                            />
                            <span className="absolute left-3 top-2.5 text-gray-500">📧</span>
                        </div>

                        {/* Submit Button */}
                        <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
