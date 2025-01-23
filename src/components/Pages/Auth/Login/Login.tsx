"use client";
import logo from "@/assets/logo/dating-logo.png";
import authBannerImage from "@/assets/auth/dating-auth.png";
import Button from "@/components/ui/Button";
import InputComponent from "@/components/ui/InputComponent";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { loggedUser, logoutUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { LoginFormValues } from "@/types/authTypes";
import { Checkbox, Form } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import sniginpic from "@/assets/singnpic.jpg"

const Login = () => {
  const [loginUser, { isLoading }] = useLoginMutation();
  const params = new URLSearchParams(window.location.search);
  const redirectUrl = params.get("redirectUrl");
  const logout = params.get("logout");
  const router = useRouter();
  const dispatch = useAppDispatch();

  if (logout) {
    dispatch(logoutUser());
  }
  const onFinish = async (values: LoginFormValues) => {
    try {
      const res = await loginUser(values).unwrap();
      if (res?.data?.attributes?.user?.role === "admin") {
        toast.error("You are not access the main website");
        return;
      }
      toast.success(res.message);
      dispatch(
        loggedUser({
          user: res?.data?.attributes?.user,
          token: res?.data?.attributes?.tokens?.accessToken,
          refreshToken: res?.data?.attributes?.tokens?.refreshToken,
        })
      );
      if (redirectUrl) {
        router.push(`/${redirectUrl}`);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-full md:h-screen w-full bg-[#B0C3E7]" style={{
      backgroundImage: `url(${sniginpic.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",}}>
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2  px-6 md:px-12 lg:px-24 py-16 m-auto">
        <div className="w-full max-w-xl bg-[#7E8CA4] rounded-lg shadow-md px-8 py-5">
          <div className="text-center mb-8 space-y-2">
            
            <h2 className="text-2xl font-semibold text-white mt-4">
              Welcome back!
            </h2>
            <p className="text-white">Please enter your details</p>
          </div>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <InputComponent placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <InputComponent placeholder="Password" isPassword />
            </Form.Item>
            <div className="flex justify-between items-center mb-4">
              <Checkbox className="text-white">Remember me</Checkbox>
              <Link
                href="/forgot-password"
                className="text-sm text-white hover:underline hover:text-primary"
              >
                Forgot password?
              </Link>
            </div>
            <Button type="submit" loading={isLoading} className="w-full">
              Login
            </Button>
          </Form>
          <p className="text-center text-sm text-white mt-6">
            Don’t have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      {/* Right Side */}
      
    </div>
  );
};

export default Login;
