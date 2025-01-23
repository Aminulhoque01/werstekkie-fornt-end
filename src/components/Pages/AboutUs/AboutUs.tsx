"use client";
import React from "react";
import aboutUs from "@/assets/about/about.jpg";

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
       style={{ backgroundImage: `url(${aboutUs.src})` }}
        className="w-full h-[650px] bg-cover bg-center relative"
      >
        <div className="absolute inset-0  flex items-center justify-center p-5">
          <div className="w-full max-w-6xl mx-auto text-center text-white p-5 md:p-10 mt-0 md:mt-20 rounded-lg bg-black bg-opacity-60">
            <h1 className="text-xl md:text-3xl font-bold mb-5">About Us</h1>
            <p className="text-lg mb-2">
              <span className="italic">
                {" "}
                Welcome to 1plus1 where Real People make Real Connections.
              </span>
              <br />
              <span> 1plus1 is a Christian dating Platform for Singles.</span>
            </p>
            <p className="text-[15px]">
              Our platform has been designed to bring meaningful connections for
              serious relationships based on Christian principles. We value
              honesty and respect and have Zero tolerance for unhealthy
              languages and disrespectfulness. At 1plus1, we understand that
              there is no better place than an online dating platform for
              Singles to feel free in presenting themselves and their wishes.
              <br />
              <br />
              We at 1plus1 are on a mission to help you find the connection that
              truly resonates with your values.
            </p>
          </div>
        </div>
      </div>

      {/* Message Section */}
      <div className="py-20 px-5 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-5">
            Message from Us
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            At <span className="text-blue-600 font-semibold">1Plus1</span>, we
            are passionate about bringing people closer together and helping
            them find meaningful relationships. We’ve built this platform with
            the belief that everyone deserves to connect with someone who truly
            complements them.
            <br />
            <br />
            Our mission is to create a safe, supportive, and inclusive space
            where singles can meet, discover shared values, and build lasting
            connections. Every feature on
            <span className="text-blue-600 font-semibold"> 1Plus1 </span> is
            designed with your needs in mind, making your journey toward finding
            the perfect match both seamless and enjoyable.
            <br />
            <br />
            Thank you for choosing
            <span className="text-blue-600 font-semibold"> 1Plus1</span>—we’re
            excited to be part of your story!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
