import DatingTips from "@/components/Pages/DatingTips/DatingTips";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dating Tips | 1Plus1 Dating website",
  description: "Dating Tips page",
  keywords: ["dating tips", "page", "example"],
};

const page = () => {
  return <DatingTips/>
};

export default page;
