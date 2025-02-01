
import BrowseJobs from "@/components/Pages/JobBrowser/page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "My Message | 1Plus1 Dating website",
  description: "My Message page",
  keywords: ["my message", "page", "example"],
};
const page = () => {
  return <BrowseJobs />;
};

export default page;