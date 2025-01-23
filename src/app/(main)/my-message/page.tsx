import Message from "@/components/Pages/Inbox/Inbox";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "My Message | 1Plus1 Dating website",
  description: "My Message page",
  keywords: ["my message", "page", "example"],
};
const page = () => {
  return <Message />;
};

export default page;
