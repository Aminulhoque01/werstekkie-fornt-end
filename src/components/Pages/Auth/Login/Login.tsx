"use client";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { loggedUser, logoutUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { LoginFormValues } from "@/types/authTypes";
import { Checkbox, Form } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Button from "@/components/ui/Button";
import InputComponent from "@/components/ui/InputComponent";
import sniginpic from "@/assets/singnpic.jpg";

const Login = () => {
  const [loginUser, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  // Handle logout
  const params = new URLSearchParams(window.location.search);
  const logout = params.get("logout");
  if (logout) {
    dispatch(logoutUser());
  }

  // Auto-login on page refresh
  useEffect(() => {
    const token = Cookies.get("token");
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user") as string) : null;
    const refreshToken = Cookies.get("refreshToken");

    if (token && user && refreshToken) {
      dispatch(loggedUser({ user, token, refreshToken }));
    }
  }, [dispatch]);

  const onFinish = async (values: LoginFormValues) => {
    try {
      const res = await loginUser(values).unwrap();
      if (res?.data?.attributes?.user?.role === "admin") {
        toast.error("You do not have access to the main website");
        return;
      }

      toast.success(res.message);

      const accessToken = res?.data?.attributes?.tokens?.accessToken;
      const refreshToken = res?.data?.attributes?.tokens?.refreshToken;

      // Store token in Redux and cookies
      dispatch(
        loggedUser({
          user: res?.data?.attributes?.user,
          token: accessToken,
          refreshToken: refreshToken,
        })
      );

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="flex h-full md:h-screen w-full bg-[#B0C3E7]"
      style={{
        backgroundImage: `url(${sniginpic.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-12 lg:px-24 py-16 m-auto">
        <div className="w-full max-w-xl bg-[#7E8CA4] rounded-lg shadow-md px-8 py-5">
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-2xl font-semibold text-white mt-4">Welcome back!</h2>
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
              rules={[{ required: true, message: "Please enter your password" }]}
            >
              <InputComponent placeholder="Password" isPassword />
            </Form.Item>
            <div className="flex justify-between items-center mb-4">
              <Checkbox className="text-white">Remember me</Checkbox>
              <Link href="/forgot-password" className="text-sm text-white hover:underline hover:text-primary">
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
    </div>
  );
};

export default Login;
