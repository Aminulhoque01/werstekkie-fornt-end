

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




