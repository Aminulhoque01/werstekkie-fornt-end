import Image from "next/image";
import React from "react";
interface ISuccessStoryCardProps {
  _id: string;
  userId: {
    _id: string;
    fullName: string;
    email: string;
    role: string;
    image: string;
    createdAt: string;
    updatedAt: string;
  };
  review: string;
}
const SuccessStoryCard = ({
  testimonial,
}: {
  testimonial: ISuccessStoryCardProps;
}) => {
  return (
    <div className="w-full h-full p-8 rounded-lg bg-white border shadow-md">
      <div className="flex gap-5">
        <Image
          width={60}
          height={60}
          src="https://i.ibb.co.com/2crq6sL/344761107-1454848951952320-4221845962883871678-n.png"
          alt="profile"
          className="rounded-full ring-2 ring-[#C6D2F6]"
        />
        <div>
          <h1 className="text-lg font-semibold text-primary">
            {testimonial.userId.fullName}
          </h1>
          <p className="text-gray-600">{testimonial.userId.role}</p>
        </div>
      </div>
      <p className="text-gray-600 mt-5">{testimonial.review}</p>
    </div>
  );
};

export default SuccessStoryCard;
