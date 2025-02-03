// "use client";
// import coverImage from "@/assets/discover/discover-banner.jpg";
// import Image from "next/image";
// import {
//   FaBriefcase,
//   FaCamera,
//   FaCity,
//   FaCode,
//   FaFlag,
//   FaGlobe,
//   FaGraduationCap,
//   FaHeart,
//   FaMale,
//   FaMapMarkerAlt,
//   FaTrashAlt,
//   FaUser,
//   FaUserFriends,
// } from "react-icons/fa";
// import { useState } from "react";
// import { Tabs } from "antd";
// import { AiOutlinePlus } from "react-icons/ai";
// import { Photo } from "../AddPhoto/AddPhoto";
// import EditProfile from "./EditProfile";

// const MyProfile = () => {
//   const [coverPhoto, setCoverPhoto] = useState(coverImage.src); // State for cover photo
//   const [showUploadModal, setShowUploadModal] = useState<boolean>(false); // State to show upload modal
//   const [newCoverPhoto, setNewCoverPhoto] = useState<string | null>(null); // Preview new image
//   const [additionalPhotos, setAdditionalPhotos] = useState<Photo[]>([]);
//   const [isProfileEdit, setIsProfileEdit] = useState<boolean>(false);

//   const handleAdditionalPhotoUpload = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const files = event.target.files ? Array.from(event.target.files) : [];
//     const newImages = files.map((file) => ({
//       id: URL.createObjectURL(file),
//       file,
//     }));
//     setAdditionalPhotos((prevImages) => [...prevImages, ...newImages]);
//   };

//   const additionalPhotoUploadButton = (
//     <label htmlFor="additional-photo-upload" className="cursor-pointer">
//       <div className="size-16 rounded-full border-2 border-dashed border-gray-950 flex items-center justify-center">
//         <AiOutlinePlus className="text-gray-950 mx-auto size-8" />
//       </div>
//       <input
//         id="additional-photo-upload"
//         type="file"
//         multiple
//         accept="image/*"
//         className="hidden"
//         onChange={handleAdditionalPhotoUpload}
//       />
//     </label>
//   );

//   const handleDeleteAdditionalPhoto = (id: string) => {
//     setAdditionalPhotos((prevImages) =>
//       prevImages.filter((image) => image.id !== id)
//     );
//   };
  
//   const discover = {
//     _id: "1",
//     fullName: "John Doe",
//     age: 29,
//     location: "New York, USA",
//     profileImage: "https://i.ibb.co/DwC7Fcq/girls.jpg",
//     description: "A tech enthusiast who loves to explore new opportunities.",
//     interests: ["Tech", "Travel", "Photography"],
//     gender: "Male",
//     continent: "North America",
//     country: "USA",
//     state: "New York",
//     city: "New York City",
//     ethnicity: "Caucasian",
//     denomination: "Christian",
//     education: "Graduate from USA University",
//     occupation: "Software Engineer",
//     maritalStatus: "Single",
//     hobby: "Coding",
//     interest: "Technology and Innovation",
//   };

//   const tabItems = [
//     {
//       key: "1",
//       label: "About Me",
//       children: (
//         <div className="space-y-5">
//           <div className="w-full bg-white p-5 rounded-lg">
//             <p className="text-gray-600 mb-3 text-[16px]">
//               {discover.description}
//             </p>
//           </div>
//           <div className="w-full bg-white p-5 rounded-lg">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-7 text-[16px]">
//               <div className="flex items-center gap-3 flex-wrap">
//                 <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
//                   <FaMale className="text-lg" />
//                 </div>
//                 <h2 className="font-semibold">Gender:</h2>
//                 <p>{discover.gender}</p>
//               </div>
//               <div className="flex items-center gap-3 flex-wrap">
//                 <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
//                   <FaUser className="text-lg" />
//                 </div>
//                 <h2 className="font-semibold">Age:</h2>
//                 <p>{discover.age}</p>
//               </div>
//               <div className="flex items-center gap-3 flex-wrap">
//                 <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
//                   <FaGlobe className="text-lg" />
//                 </div>
//                 <h2 className="font-semibold">Continent:</h2>
//                 <p>{discover.continent}</p>
//               </div>
//               <div className="flex items-center gap-3 flex-wrap">
//                 <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
//                   <FaFlag className="text-lg" />
//                 </div>
//                 <h2 className="font-semibold">Country:</h2>
//                 <p>{discover.country}</p>
//               </div>
//               <div className="flex items-center gap-3 flex-wrap">
//                 <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
//                   <FaMapMarkerAlt className="text-lg" />
//                 </div>
//                 <h2 className="font-semibold">State:</h2>
//                 <p>{discover.state}</p>
//               </div>
//               <div className="flex items-center gap-3 flex-wrap">
//                 <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
//                   <FaCity className="text-lg" />
//                 </div>
//                 <h2 className="font-semibold">City:</h2>
//                 <p>{discover.city}</p>
//               </div>
//               <div className="flex items-center gap-3 flex-wrap">
//                 <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
//                   <FaUserFriends className="text-lg" />
//                 </div>
//                 <h2 className="font-semibold">Ethnicity:</h2>
//                 <p>{discover.ethnicity}</p>
//               </div>
//               <div className="flex items-center gap-3 flex-wrap">
//                 <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
//                   <FaHeart className="text-lg" />
//                 </div>
//                 <h2 className="font-semibold">Denomination:</h2>
//                 <p>{discover.denomination}</p>
//               </div>
//               <div className="flex items-center gap-3 flex-wrap">
//                 <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
//                   <FaGraduationCap className="text-lg" />
//                 </div>
//                 <h2 className="font-semibold">Education:</h2>
//                 <p>{discover.education}</p>
//               </div>
//               <div className="flex items-center gap-3 flex-wrap">
//                 <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
//                   <FaBriefcase className="text-lg" />
//                 </div>
//                 <h2 className="font-semibold">Occupation:</h2>
//                 <p>{discover.occupation}</p>
//               </div>
//               <div className="flex items-center gap-3 flex-wrap">
//                 <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
//                   <FaHeart className="text-lg" />
//                 </div>
//                 <h2 className="font-semibold">Marital Status:</h2>
//                 <p>{discover.maritalStatus}</p>
//               </div>
//               <div className="flex items-center gap-3 flex-wrap">
//                 <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
//                   <FaCamera className="text-lg" />
//                 </div>
//                 <h2 className="font-semibold">Hobby:</h2>
//                 <p>{discover.hobby}</p>
//               </div>
//               <div className="flex items-center gap-3 flex-wrap">
//                 <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
//                   <FaCode className="text-lg" />
//                 </div>
//                 <h2 className="font-semibold">Interest:</h2>
//                 <p>{discover.interest}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ),
//     },
//     {
//       key: "2",
//       label: "Photos",
//       children: (
//         <div className="p-5">
//           <h1 className="text-xl font-semibold mb-3">Photos</h1>
//           <div className="flex flex-wrap gap-4">
//             {additionalPhotos.map((image) => (
//               <div key={image.id} className="w-60 h-64 relative">
//                 <Image
//                   src={image.id}
//                   alt="profile"
//                   fill
//                   className="w-full h-full absolute"
//                 />
//                 <div
//                   className="p-2.5 shadow-md flex cursor-pointer justify-end items-center bg-opacity-65 absolute top-2 right-2 bg-white rounded-full"
//                   onClick={() => handleDeleteAdditionalPhoto(image.id)}
//                 >
//                   <FaTrashAlt className="size-4 text-rose-500" />
//                 </div>
//               </div>
//             ))}
//             <div className="w-60 h-64 border border-gray-950 flex justify-center items-center">
//               {additionalPhotoUploadButton}
//             </div>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   // Handle file upload
//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setNewCoverPhoto(reader.result as string);
//         setShowUploadModal(true);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Save new cover photo
//   const handleSavePhoto = () => {
//     if (newCoverPhoto) {
//       setCoverPhoto(newCoverPhoto);
//       setShowUploadModal(false);
//     }
//   };

//   // Cancel upload
//   const handleCancelUpload = () => {
//     setNewCoverPhoto(null);
//     setShowUploadModal(false);
//   };

//   return (
//     <section className="w-full bg-secondary">
//       {/* Cover Image Section */}
//       <div className="w-full h-[350px] relative">
//         <Image
//           src={coverPhoto}
//           fill
//           className="w-full h-full object-cover absolute"
//           alt="cover"
//         />
//         {/* Edit Cover Photo Button */}
//         <div className="absolute bottom-5 right-5">
//           <label htmlFor="upload-cover-photo" className="cursor-pointer">
//             <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg">
//               <FaCamera className="text-lg" />
//               <span>Edit Cover Photo</span>
//             </div>
//           </label>
//           <input
//             id="upload-cover-photo"
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={handleFileUpload}
//           />
//         </div>
//       </div>

//       {/* Modal for Previewing Uploaded Image */}
//       {showUploadModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg w-[90%] max-w-[500px]">
//             <h2 className="text-xl font-semibold mb-4">
//               Preview New Cover Photo
//             </h2>
//             {newCoverPhoto && (
//               <div className="w-full h-[200px] mb-4">
//                 <Image
//                   src={newCoverPhoto}
//                   alt="New Cover"
//                   width={500}
//                   height={200}
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               </div>
//             )}
//             <div className="flex justify-end gap-4">
//               <button
//                 onClick={handleCancelUpload}
//                 className="px-6 py-2 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white rounded-lg"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSavePhoto}
//                 className="px-6 py-2 bg-primary text-white rounded-lg"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Profile Info Section */}
//       <div className="w-full md:container px-5 py-16">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-5">
//           <div className="flex flex-col md:flex-row items-center gap-10">
//             <div className="w-[270px] h-[300px] relative -mt-0 md:-mt-48">
//               <Image
//                 src={discover?.profileImage}
//                 alt="profileImage"
//                 fill
//                 className="absolute w-full h-full object-cover rounded-xl"
//               />
//             </div>
//             <div className="space-y-3">
//               <h1 className="text-2xl md:text-3xl">{discover?.fullName}</h1>
//               <div className="flex items-center gap-5">
//                 <h1 className="text-lg text-gray-600">Age : {discover?.age}</h1>
//                 <h1 className="text-lg text-gray-600">{discover?.location}</h1>
//               </div>
//             </div>
//           </div>
//           {!isProfileEdit && (
//             <div className="flex items-center gap-5">
//               <button
//                 onClick={() => setIsProfileEdit(true)}
//                 className="px-6 py-3 bg-primary text-white rounded-lg text-sm flex justify-center items-center gap-3"
//               >
//                 Edit Profile
//               </button>
//             </div>
//           )}
//         </div>
//         <div className="mt-10">
//           {isProfileEdit ? (
//             <EditProfile setIsProfileEdit={setIsProfileEdit} />
//           ) : (
//             <Tabs defaultActiveKey="1" items={tabItems} />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MyProfile;



"use client";
import React, { useState } from "react";
import Image from "next/image";

const ProfilePage = () => {
  const [profilePic, setProfilePic] = useState("/default-profile.png"); // Default Profile Picture

  const handleImageChange = (event:any) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center">
          <label className="relative cursor-pointer">
            {profilePic && (
              <Image
                src={profilePic}
                alt="Profile"
                width={100}
                height={100}
                unoptimized={true} // Important for local object URLs
                className="w-24 h-24 rounded-full border border-gray-300 object-cover"
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">📷</span>
            </div>
          </label>
          <p className="text-lg font-semibold mt-2">Profile Picture</p>
        </div>

        {/* Form Section */}
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Jhon Doe"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Your Email</label>
            <input
              type="email"
              placeholder="abc2gmail.com"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;

