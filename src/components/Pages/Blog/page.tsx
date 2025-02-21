'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetAllPublishedBlogQuery } from "@/redux/features/blog/blog";
import { ImageBaseUrl } from "@/redux/features/blog/ImageBaseUrl";

// Define the type for a blog post
interface BlogPost {
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    featureImage: string;
    tag: string[];
    category: string;
}

export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const { data, error, isLoading } = useGetAllPublishedBlogQuery({
        page: currentPage,
        limit: postsPerPage,
    });

    const blogs: BlogPost[] = data?.data?.attributes || [];

    console.log(blogs)

    const getFullImageUrl = (path?: string) => {
        if (!path) return "/default-image.jpg";
        if (path.startsWith("http")) return path;
        return `${ImageBaseUrl}${path}`;
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching blogs</p>;
    if (!blogs.length) return <p className="text-center">No blogs found.</p>;

    return (
        <div className="min-h-screen px-4 py-8 w-[80%] m-auto mt-20">
            <h1 className="text-3xl font-bold text-center">Welcome to Our Blog!</h1>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-6 mt-5">
                Whether you&apos;re searching for your dream job or looking to hire top talent, our platform is designed to deliver exceptional results.
            </p>

            <h2 className="text-xl font-bold mb-6 text-center mt-10">Recent Blogs</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 lg:w-[80%] m-auto mb-20">

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
                                <span  className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                                    {blogs[0]?.tag}
                                </span>
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

                <div className="flex flex-col space-y-4">
                    {blogs.slice(1, 4).map((post: BlogPost, index: number) => (
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
                                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                                            {post.tag}
                                        </span>
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
                {blogs.map((post: BlogPost, index: number) => (
                    <div key={index} className="bg-white shadow rounded-lg p-4 border flex items-center mb-4">
                        <Image
                            src={getFullImageUrl(post.featureImage)}
                            alt="Blog Image"
                            width={150}
                            height={100}
                            className="rounded-lg w-[150px] h-[100px] object-cover"
                        />

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
