import Image from "next/image";
import logo from "@/assets/logo/dating-logo.png";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1400px] mx-auto  px-5 py-16 m-auto">
      <div className="w-full md:container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" width={130} height={80} />
          </Link>
          <p className="mt-4 text-sm text-gray-700">
            Where Real People Make Real Connections. Join our Christian dating
            platform built on honesty, respect, and meaningful relationships.
            Your next great connection starts here.
          </p>
        </div>

        {/* User Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">User Navigation</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              <Link href="/discover" className="hover:underline">
                Discover
              </Link>
            </li>
            <li>
              <Link href="/my-profile" className="hover:underline">
                My Profile
              </Link>
            </li>
            <li>
              <Link href="/subscriptions" className="hover:underline">
                Subscriptions
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:underline">
                Login / Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/dating-tips" className="hover:underline">
                Online Dating Tips
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-condition" className="hover:underline">
                Terms of Condition
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div >
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="text-sm text-gray-700 space-y-4">
            <li className="flex items-center">
              <FaEnvelope className="size-5 mr-2" />
              <Link href="mailto:info@1plus1.com" className="hover:underline">
                info@1plus1.com
              </Link>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="size-5 mr-2" />
              <Link href="tel:+2114918024" className="hover:underline">
                +21 14 918 024
              </Link>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="size-5 mr-2" />
              <p>Dhaka, Bangladesh</p>
            </li>
          </ul>
          <div className="mt-10 flex space-x-4">
            <a
              href="https://www.facebook.com/"
              className="text-blue-600 hover:text-blue-700 text-3xl px-3"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="text-blue-500 hover:text-blue-600 text-3xl px-3"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com"
              className="text-red-600 hover:text-red-700 text-3xl px-5 "
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          ©2025 Werkstekkie. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;







