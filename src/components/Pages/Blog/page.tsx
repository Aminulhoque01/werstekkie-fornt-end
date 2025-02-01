'use client';

import { useState } from 'react';
import blogImage from '@/assets/blogImage.jpg';

import Image from 'next/image';
import Link from 'next/link';
const blogPosts = Array(10).fill({
    title: "5 Essential Tips to Land Your Dream Job in 2024",
    date: "6 Sep, 2022",
    category: ["Job", "Best"],
    image: "/blog-image.jpg", // Replace with your actual image path
    description:
        "In today’s competitive job market, standing out from the crowd is more important than ever. Whether you're a recent graduate, a career changer, or someone looking to climb the corporate ladder, these five essential tips will help you land your dream job in 2024.",
});

export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const paginatedPosts = blogPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    return (
        <div className="min-h-screen px-4 py-8 w-[80%] m-auto mt-20">
            {/* Title Section */}
            <h1 className="text-3xl font-bold text-center">Welcome to Our Blog!</h1>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-6 mt-5">
                Whether you're searching for your dream job or looking to hire top talent, our platform is designed to deliver exceptional results. With a commitment to innovation and trust, we are reshaping the way people find and fill opportunities.
            </p>

            {/* Featured Blogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-10 lg:w-[80%]  m-auto mb-20 ">
                {blogPosts.slice(0, 2).map((post, index) => (
                    <div key={index} className=" bg-white shadow-md p-4 flex flex-col border border-gray-200 rounded-lg">
                        {/* Fixed Image Size */}
                        <div>
                            <Image
                                src={blogImage}
                                alt={post.title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        {/* Blog Content */}
                        <div className="flex flex-col flex-grow py-5 ">
                            <p className="text-gray-500 text-sm mt-2">{post.date}</p>
                            <div className="flex space-x-2 mt-1">
                                {post.category.map((tag: any, i: any) => (
                                    <span key={i} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">{tag}</span>
                                ))}
                            </div>
                            <h2 className="font-semibold text-lg mt-2">{post.title}</h2>
                            <p className="text-gray-600 text-lg mt-1 line-clamp-3">{post.description}</p>

                            {/* Read More Button - Aligned at Bottom */}
                            <div className="mt-auto pt-4 ">
                                <Link href={`/blog/${index}`}>
                                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* All Blog Section */}

            {/* All Blog Section */}
            <h2 className="text-2xl font-semibold text-center mb-4">All Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 lg:w-[80%] m-auto mb-20">
                {paginatedPosts.map((post, index) => (
                    <div key={index} className="bg-white shadow rounded-lg p-4 border">
                        {/* Fixed Image Size */}
                        <div className="">
                            <Image src={blogImage} alt={post.title} className="w-full h-full  rounded-md" />
                        </div>

                        {/* Blog Content */}
                        <p className="text-gray-500 text-sm mt-2">{post.date}</p>
                        <div className="flex space-x-2 mt-1">
                            {post.category.map((tag: any, i: any) => (
                                <span key={i} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">{tag}</span>
                            ))}
                        </div>
                        <h3 className="font-medium text-md mt-2">{post.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{post.description}</p>

                        {/* Read More Button */}
                        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            Read More
                        </button>
                    </div>
                ))}
            </div>

            {/* Pagination */}


            <div className="flex justify-center space-x-2 mb-20">
                {[1, 2].map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${currentPage === page ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700"
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

        </div>


    );
}
