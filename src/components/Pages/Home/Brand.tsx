import React from 'react';
import facebook from "@/assets/success/Facebook.png";
import google from "@/assets/success/Google.png";
import aws from "@/assets/success/AWS.jpg";
import forbes from "@/assets/success/Forbes.png";
import sumge from "@/assets/success/Samsung.png";

const Brands = () => {
  const brandLogos = [
    { name: 'Facebook', url: facebook },
    { name: 'Google', url: google },
    { name: 'AWS', url: aws },
    { name: 'Samsung', url: sumge },
    { name: 'Forbes', url: forbes },
    { name: 'Pinterest', url: '/path-to-pinterest-logo.svg' }, // Local string path
  ];

  return (
    <div className="bg-gray-50 py-6 border-t border-b border-gray-200">
      <div className="lg:w-[1200] mx-auto grid md:grid-cols-2 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
        {brandLogos.map((brand) => (
          <div
            key={brand.name}
            className="flex justify-center items-center"
          >
            <img
              src={typeof brand.url === 'string' ? brand.url : brand.url.src} // Handle both string and imported images
              alt={brand.name}
              className="h-10 object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;

