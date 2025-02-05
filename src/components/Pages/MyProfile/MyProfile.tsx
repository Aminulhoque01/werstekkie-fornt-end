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



// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Camera } from "lucide-react";
// import { useUpdateProfileMutation } from "@/redux/features/profile/profileApi";
// import { useSelector } from "react-redux";

// export default function ProfileEdit() {

//   const user = useSelector((state:any) => state.auth.user);

//   const [updateProfile, { data, error }] = useUpdateProfileMutation();
//   console.log(user._id)


//   const [profileImage, setProfileImage] = useState("/profile-placeholder.png"); // Replace with actual profile image URL

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       const imageUrl = URL.createObjectURL(event.target.files[0]);
//       setProfileImage(imageUrl);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       {/* Profile Picture Upload */}
//       <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-300">
//         <Image
//           src={profileImage}
//           alt="Profile Picture"
//           width={128}
//           height={128}
//           className="w-full h-full object-cover"
//         />
//         <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer">
//           <Camera className="text-white w-6 h-6" />
//           <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
//         </label>
//       </div>

//       <h2 className="text-lg font-semibold text-gray-700 mt-3">Profile Picture</h2>

//       {/* Form Container */}
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mt-4">
//         <form className="space-y-4">
//           {/* Full Name */}
//           <div>
//             <label className="block text-gray-600 text-sm font-medium">Full Name</label>
//             <input
//               type="text"
//               placeholder="Jhon Doe"
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-gray-600 text-sm font-medium">Your Email</label>
//             <input
//               type="email"
//               placeholder="abc2gmail.com"
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label className="block text-gray-600 text-sm font-medium">Your Phone Number</label>
//             <input
//               type="text"
//               placeholder="01283873"
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             />
//           </div>

//           {/* Current Password */}
//           <div>
//             <label className="block text-gray-600 text-sm font-medium">Current Password</label>
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             />
//           </div>

//           {/* New Password */}
//           <div>
//             <label className="block text-gray-600 text-sm font-medium">New Password</label>
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             />
//           </div>

//           {/* Save Changes Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Save Changes
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { useUpdateProfileMutation, useUpdateProfileImageMutation } from "@/redux/features/profile/profileApi";
import { useSelector } from "react-redux";
import { toast } from "sonner";

export default function ProfileEdit() {
  // ✅ Always call hooks at the top
  const user = useSelector((state: any) => state.auth.user);

  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
  const [updateProfileImage] = useUpdateProfileImageMutation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
  });

  const [profileImage, setProfileImage] = useState<string>(user?.profileImage); // Set initial profile image from user

  console.log(profileImage)
  // ✅ Fetch user data and populate the form
  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
        currentPassword: "",
        newPassword: "",
      });

      setProfileImage(user.profileImage || "/profile-placeholder.png"); // Use existing image from user data
    }
  }, [user]);

  // ✅ Handle input field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle profile update submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProfile({ id: user._id, ...formData }).unwrap();
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile.");
    }
  };

  // ✅ Handle profile image upload
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageFile = event.target.files[0];
      const profileImage = URL.createObjectURL(imageFile); // Local URL for preview
      setProfileImage(profileImage); // Show preview before uploading
      
      const formData = new FormData();
      formData.append("profileImage", imageFile);

      try {
        const response = await updateProfileImage(formData).unwrap(); // Get server response with updated profile image URL
        setProfileImage(response.profileImage || profileImage); // Update with new image URL from server
        toast.success("Profile image updated successfully!");
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Failed to upload profile image.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* ✅ Instead of returning early, use conditional rendering */}
      {!user ? (
        <p>Please log in to edit your profile.</p>
      ) : (
        <>
          {/* Profile Picture Upload */}
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-300">
            <Image
              src={profileImage}
              alt="Profile Picture"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
            <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer">
              <Camera className="text-white w-6 h-6" />
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </label>
          </div>

          <h2 className="text-lg font-semibold text-gray-700 mt-3">Profile Picture</h2>

          {/* Form Container */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mt-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-600 text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="abc@gmail.com"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm font-medium">Your Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="01283873"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm font-medium">Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Enter current password"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm font-medium">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                disabled={isUpdating}
              >
                {isUpdating ? "Saving..." : "Save Changes"}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}




