"use client";
import Image from "next/image";
import user from "@/assets/howItWork/User.png";
import filter from "@/assets/howItWork/Filter.png";
import match from "@/assets/howItWork/Match.png";
import journey from "@/assets/howItWork/Journey.png";
const steps = [
  {
    title: "Create Your Profile",
    description:
      "Sign up and fill in your details to let your personality shine.",
    icon: user, // Replace with actual icon path
  },
  {
    title: "Set Your Preferences",
    description: "Customize your search with filters for ideal matches.",
    icon: filter, // Replace with actual icon path
  },
  {
    title: "Find and Connect with Matches",
    description: "Browse profiles tailored to your interests and values.",
    icon: match, // Replace with actual icon path
  },
  {
    title: "Start Your Journey",
    description: "Start meaningful conversations with your matches.",
    icon: journey, // Replace with actual icon path
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full px-5 py-16 bg-[#f5f7fa]">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-medium text-center mb-10">
        How It Works
      </h1>
      <div className="w-full md:container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center text-center md:text-left gap-5 p-5  rounded-md"
            >
              <div className="size-28 flex-shrink-0 bg-[#E6ECF7] flex justify-center items-center rounded-lg">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{step.title}</h2>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
