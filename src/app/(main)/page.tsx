
import HeroSection from "@/components/Pages/Home/HeroSection";
import Jobs from "@/components/Pages/Home/Jobs";
import SuccessStory from "@/components/Pages/Home/SuccessStory";
import React from "react";

const Home = () => {
  return (
    <section className="w-full  bg-gradient-to-t from-[#F5F9FF] to-[#F5F9FF]">
      <HeroSection />
      <Jobs />
      <SuccessStory />
      {/* <HowItWorks /> */}
      {/* <Subscriptions/> */}
      {/* <Tips/> */}
    </section>
  );
};

export default Home;
