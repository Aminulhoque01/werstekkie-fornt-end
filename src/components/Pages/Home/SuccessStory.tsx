
import Brands from "./Brand";
import SubscribeSection from "./Subscriptions";


const SuccessStory = () => {
  return (
    <section className=" lg:w-[1400] lg:container md:container px-5 py-16">
      <div className="">
      <Brands/>
      </div>
      
      <div className=" ">
        <SubscribeSection/>
      </div>
    </section>
  );
};

export default SuccessStory;
