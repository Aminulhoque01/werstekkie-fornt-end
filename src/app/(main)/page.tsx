
import HeroSection from "@/components/Pages/Home/HeroSection";
import HowItWorks from "@/components/Pages/Home/HowItWorks";
import Jobs from "@/components/Pages/Home/Jobs";
import Subscriptions from "@/components/Pages/Home/Subscriptions";
import SuccessStory from "@/components/Pages/Home/SuccessStory";
import Tips from "@/components/Pages/Home/Tips";
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
