import quotes from "@/assets/success/Qotes.png";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SuccessStoryCard from "./SuccessStoryCard";
import Brands from "./Brand";
import SubscribeSection from "./Subscriptions";


const SuccessStory = () => {
  return (
    <section className="lg:w-[1400] lg:container md:container px-5 py-16">
      <div className="mt-5">
      <Brands/>
      </div>
      
      <div className=" ">
        <SubscribeSection/>
      </div>
    </section>
  );
};

export default SuccessStory;
