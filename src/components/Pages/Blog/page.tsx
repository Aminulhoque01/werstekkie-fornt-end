// 'use client';

// import { useState } from 'react';
// import blogImage from '@/assets/blogImage.jpg';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useGetAllBlogsQuery } from '@/redux/features/blog/blog';


// const blogPosts = Array(10).fill({
//     title: "5 Essential Tips to Land Your Dream Job in 2024",
//     date: "6 Sep, 2022",
//     category: ["Job", "Best"],
//     image: "/blog-image.jpg", // Replace with your actual image path
//     description:
//         "In today’s competitive job market, standing out from the crowd is more important than ever. Whether you're a recent graduate, a career changer, or someone looking to climb the corporate ladder, these five essential tips will help you land your dream job in 2024.",
// });

// export default function BlogPage() {
//     //  const { data, error, isLoading } = useGetAllBlogsQuery({});

//     //  const allblog = data?.data?.attributes; // Adjust 'attributes' to the correct property name based on your API response structure
//     //  console.log(allblog)


//     const [currentPage, setCurrentPage] = useState(1);
//     const postsPerPage = 6;

//     const paginatedPosts = blogPosts.slice(
//         (currentPage - 1) * postsPerPage,
//         currentPage * postsPerPage
//     );

//     return (
//         <div className="min-h-screen px-4 py-8 w-[80%] m-auto mt-20">
//             {/* Title Section */}
//             <h1 className="text-3xl font-bold text-center">Welcome to Our Blog!</h1>
//             <p className="text-gray-600 text-center max-w-xl mx-auto mb-6 mt-5">
//                 Whether you're searching for your dream job or looking to hire top talent, our platform is designed to deliver exceptional results. With a commitment to innovation and trust, we are reshaping the way people find and fill opportunities.
//             </p>

//             {/* Featured Blogs */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-10 lg:w-[80%]  m-auto mb-20 ">
//                 {blogPosts.slice(0, 2).map((post:any, index:any) => (
//                     <div key={index} className=" bg-white shadow-md p-4 flex flex-col border border-gray-200 rounded-lg">
//                         {/* Fixed Image Size */}
//                         <div>
//                             <Image
//                                 src={blogImage}
//                                 alt={post.title}
//                                 className="w-full h-full object-cover rounded-lg"
//                             />
//                         </div>

//                         {/* Blog Content */}
//                         <div className="flex flex-col flex-grow py-5 ">
//                             <p className="text-gray-500 text-sm mt-2">{post.date}</p>
//                             <div className="flex space-x-2 mt-1">
//                                 {post.category.map((tag: any, i: any) => (
//                                     <span key={i} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">{tag}</span>
//                                 ))}
//                             </div>
//                             <h2 className="font-semibold text-lg mt-2">{post.title}</h2>
//                             <p className="text-gray-600 text-lg mt-1 line-clamp-3">{post.description}</p>

//                             {/* Read More Button - Aligned at Bottom */}
//                             <div className="mt-auto pt-4 ">
//                                 <Link href={`/blog/${index}`}>
//                                     <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                                         Read More
//                                     </button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* All Blog Section */}

//             {/* All Blog Section */}
//             <h2 className="text-2xl font-semibold text-center mb-4">All Blog</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 lg:w-[80%] m-auto mb-20">
//                 {paginatedPosts.map((post, index) => (
//                     <div key={index} className="bg-white shadow rounded-lg p-4 border">
//                         {/* Fixed Image Size */}
//                         <div className="">
//                             <Image src={blogImage} alt={post.title} className="w-full h-full  rounded-md" />
//                         </div>

//                         {/* Blog Content */}
//                         <p className="text-gray-500 text-sm mt-2">{post.date}</p>
//                         <div className="flex space-x-2 mt-1">
//                             {post.category.map((tag: any, i: any) => (
//                                 <span key={i} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">{tag}</span>
//                             ))}
//                         </div>
//                         <h3 className="font-medium text-md mt-2">{post.title}</h3>
//                         <p className="text-gray-600 text-sm mt-1">{post.description}</p>

//                         {/* Read More Button */}
//                         <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                             Read More
//                         </button>
//                     </div>
//                 ))}
//             </div>

//             {/* Pagination */}


//             <div className="flex justify-center space-x-2 mb-20">
//                 {[1, 2].map((page) => (
//                     <button
//                         key={page}
//                         onClick={() => setCurrentPage(page)}
//                         className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${currentPage === page ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700"
//                             }`}
//                     >
//                         {page}
//                     </button>
//                 ))}
//             </div>

//         </div>


//     );
// }




'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetAllBlogsQuery } from "@/redux/features/blog/blog";
import { ImageBaseUrl } from "@/redux/features/blog/ImageBaseUrl";

export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    // Fetch blogs from API
    const { data, error, isLoading } = useGetAllBlogsQuery({
        page: currentPage,
        limit: postsPerPage,
    });

    // Ensure correct data access
    const blogs = data?.data?.attributes || [];

    console.log(blogs)

    // Function to get a full image URL with a fallback
    const getFullImageUrl = (path?: string) => {
        if (!path) return "/default-image.jpg"; // Default image if missing
        if (path.startsWith("http")) return path; // Full URL check
        return `${ImageBaseUrl}${path}`; // Construct absolute URL
    };

    // Handle loading and errors
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching blogs</p>;
    if (!blogs.length) return <p className="text-center">No blogs found.</p>;

    return (
        <div className="min-h-screen px-4 py-8 w-[80%] m-auto mt-20">
            <h1 className="text-3xl font-bold text-center">Welcome to Our Blog!</h1>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-6 mt-5">
                Whether you're searching for your dream job or looking to hire top talent, our platform is designed to deliver exceptional results.
            </p>

            {/* Recent Blog Section */}
            <h2 className="text-xl font-bold mb-6 text-center mt-10">Recent Blogs</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 lg:w-[80%] m-auto mb-20">
                {/* Featured Blog */}
                <div className="lg:col-span-2 bg-white shadow-md p-4 border rounded-lg">
                    <Image
                        src={getFullImageUrl(blogs[0]?.featureImage)}
                        alt="Blog Image"
                        width={800}
                        height={500}
                        className="rounded-lg w-full"
                    />
                    <Link href={`/blog/${blogs[0]?._id}`}>
                        <div className="py-5">
                            <p className="text-gray-500 text-sm mt-2">
                                {new Date(blogs[0]?.createdAt || "").toLocaleDateString()}
                            </p>
                            <div className="flex space-x-2 mt-1">
                                {blogs[0]?.tag?.length > 0 ? (
                                    blogs[0]?.tag.map((tag: string, i: number) => (
                                        <span key={i} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))
                                ) : (
                                    <span className="text-gray-500 text-xs">No Tags</span>
                                )}
                                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                                    {blogs[0]?.category || "Uncategorized"}
                                </span>
                            </div>
                            <h2 className="font-semibold text-lg mt-2">{blogs[0]?.title || "No Title"}</h2>
                            <p className="text-gray-600 text-lg mt-1 line-clamp-3">
                                {blogs[0]?.content?.substring(0, 150) || "No content available"}...
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Smaller Blogs */}
                <div className="flex flex-col space-y-4">
                    {blogs.slice(1, 4).map((post: any, index: number) => (
                        <div key={index} className="bg-white shadow-md p-4 border rounded-lg flex">
                            <Image
                                src={getFullImageUrl(post.featureImage)}
                                alt="Blog Image"
                                width={120}
                                height={80}
                                className="rounded-lg w-[30%] object-cover"
                            />
                            <Link href={`/blog/${post._id}`}>
                                <div className="ml-4 flex flex-col justify-between">
                                    <h3 className="font-semibold text-sm">{post.title || "No Title"}</h3>
                                    <p className="text-gray-500 text-xs">
                                        {new Date(post.createdAt || "").toLocaleDateString()}
                                    </p>
                                    <div className="flex space-x-2 mt-1">
                                        {post.tag?.length > 0 ? (
                                            post.tag.map((tag: string, i: number) => (
                                                <span key={i} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="text-gray-500 text-xs">No Tags</span>
                                        )}
                                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                                            {post.category || "Uncategorized"}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-xs line-clamp-2">
                                        {post.content?.substring(0, 80) || "No content available"}...
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* All Blogs Section */}
            <h2 className="text-2xl font-semibold text-center mb-4">All Blogs</h2>
            <div className="w-full max-w-[1300px] mx-auto">
                {blogs.map((post: any, index: number) => (
                    <div key={index} className="bg-white shadow rounded-lg p-4 border flex items-center mb-4">
                        {/* Blog Image */}
                        <Image
                            src={getFullImageUrl(post.featureImage)}
                            alt="Blog Image"
                            width={150}
                            height={100}
                            className="rounded-lg w-[150px] h-[100px] object-cover"
                        />
                        {/* Blog Content */}
                        <Link href={`/blog/${post._id}`}>
                            <div className="ml-4 flex-1">
                                <h3 className="font-semibold text-md">{post.title || "No Title"}</h3>
                                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                                    {post.content?.substring(0, 150) || "No content available"}...
                                </p>
                                <p className="text-gray-500 text-xs mt-2">
                                    {new Date(post.createdAt || "").toLocaleDateString()}
                                </p>
                                <div className="flex space-x-2 mt-1">
                                   
                                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                                        {post.category || "Uncategorized"}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center space-x-2 mb-20">
                {[1, 2, 3, 4].map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${currentPage === page ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700"}`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
}


