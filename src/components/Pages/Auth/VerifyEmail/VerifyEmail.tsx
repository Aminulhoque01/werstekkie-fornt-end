"use client";
import logo from "@/assets/logo/dating-logo.png";
import authBannerImage from "@/assets/auth/dating-auth.png";
import OTPInput from "react-otp-input";
import Button from "@/components/ui/Button";
import {
  useForgotPasswordMutation,
  useVerifyEmailMutation,
} from "@/redux/features/auth/authApi";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import sniginpic from "@/assets/singnpic.jpg"



const VerifyEmail = () => {
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  const [forgotPassword] = useForgotPasswordMutation();
  const [oneTimeCode, setOneTimeCode] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";
  const type = searchParams.get("type") || "";

  // Handle OTP change
  const handleOtpChange = (otpValue: string) => {
    setOneTimeCode(otpValue);
  };

  // Handle form submission
  const onFinish = async () => {
    try {
      const res = await verifyEmail({ email, oneTimeCode }).unwrap();
      toast.success(res.message);
      router.push(
        `/${type === "register" ? "login" : `reset-password?email=${email}`}`
      );
    } catch (error) {
     console.log(error)
    }
  };

  const handleResendOtp = async () => {
    try {
      const res = await forgotPassword({ email }).unwrap();
      toast.success(res.message);
    } catch (error) {
    console.log(error)
    }
  };

  return (
    <div className="flex h-full md:h-screen w-full bg-[#B0C3E7]" style={{
      backgroundImage: `url(${sniginpic.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",}}>
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-12 lg:px-24 py-16 m-auto">
        <div className="w-full max-w-xl bg-[#7E8CA4] rounded-lg shadow-lg px-8 py-6">
          <div className="text-center mb-8 space-y-2">
            
            <h2 className="text-3xl font-semibold text-white mt-4">
              Verify Your Email
            </h2>
            <p className="text-white">
              Please enter the OTP sent to your email address.
            </p>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <OTPInput
              value={oneTimeCode}
              onChange={handleOtpChange}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              containerStyle="otp-container"
              inputStyle={{
                width: "100%",
                maxWidth: "6.5rem",
                height: "3rem",
                margin: "0 0.5rem",
                fontSize: "2rem",
                fontWeight: "bold",
                borderBottom: "2px solid #4E4E4E",
                textAlign: "center",
                outline: "none",
              }}
            />
          </div>
          <div className="mt-5 text-center">
            <Button onClick={onFinish} loading={isLoading} className="w-full">
              Verify Email
            </Button>
          </div>
          <div className="flex justify-between items-center mt-8 ">
            <p className="text-white text-center ">
              Didn&apos;t receive the OTP?{" "}
            </p>
            <span
              onClick={handleResendOtp}
              className="text-primary cursor-pointer hover:underline"
            >
              Resend OTP
            </span>
          </div>
        </div>
      </div>
      {/* Right Side */}
      
    </div>
  );
};

export default VerifyEmail;
