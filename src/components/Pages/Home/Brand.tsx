import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import facebook from "@/assets/success/facebook 1.svg";
import google from "@/assets/success/google 1.svg";
import aws from "@/assets/success/avis 1.svg";
import forbes from "@/assets/success/forbes 1.svg";
import sumge from "@/assets/success/samsung 1.svg";
import pinterest from "@/assets/success/pinterest 1.svg";

const Brands = () => {
  const brandLogos = [
    { name: 'Facebook', url: facebook },
    { name: 'Google', url: google },
    { name: 'AWS', url: aws },
    { name: 'Samsung', url: sumge },
    { name: 'Forbes', url: forbes },
    { name: 'Pintarest', url: pinterest },
  ];

  return (
    <div className="py-6 mt-10">
      <div className=" lg:max-w-[1400px] px-4 md:px-8 mx-auto grid md:grid-cols-2 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:grid-cols-1">
        {brandLogos.map((brand) => (
          <div
            key={brand.name}
            className="flex justify-center items-center"
          >
            <Image
              src={brand.url}  
              alt={brand.name}
              width={450}  
              height={80}  
              className="object-contain opacity-60 hover:opacity-100 transition-opacity px-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;




