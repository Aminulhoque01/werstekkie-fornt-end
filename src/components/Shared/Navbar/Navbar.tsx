// "use client";
// import React, { useState, useEffect } from "react";
// import logo from "@/assets/logo/dating-logo.png";
// import Image from "next/image";
// import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi"; // For the mobile menu icons

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Browse Jobs", href: "/browser-job" },
//   { name: "About Us", href: "/about-us" },
//   { name: "Contact Us", href: "/contact-us" },
//   { name: "Blog", href: "/blog" },
//   { name: "Apply", href: "/apply-job" },
// ];

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`w-full h-[105px] fixed top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/70 backdrop-blur-md" : "bg-transparent"
//         }`}
//     >
//       <nav
//         className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex justify-between items-center h-full"
//         role="navigation"
//       >
//         {/* Logo */}
//         <Link href="/">
//           <Image src={logo} alt="logo" width={130} height={80} />
//         </Link>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex items-center gap-5 md:gap-8">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <Link href={link.href} className="hover:text-primary">
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Sign In Button (Desktop) */}
//         <div className="hidden md:block">
//           <Link href="/register">
//             <button className="px-5 py-2 bg-primary text-white rounded-lg">
//               Sign In
//             </button>
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="text-2xl"
//           >
//             {isMobileMenuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white shadow-lg fixed top-[105px] left-0 w-full z-40">
//           <ul className="flex flex-col items-center gap-4 py-4">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   href={link.href}
//                   onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
//                   className="hover:text-primary"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <div className="flex justify-center py-4">
//             <Link href="/register">
//               <button
//                 onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
//                 className="px-5 py-2 bg-primary text-white rounded-lg"
//               >
//                 Sign In
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



"use client";
import React, { useState, useEffect } from "react";
import logo from "@/assets/logo/dating-logo.png";
import userIcon from "@/assets/logo/user.png"; // User icon for logged-in users
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; 
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; // Import RootState type
import { useAppDispatch } from "@/redux/hooks";
import { logoutUser } from "@/redux/features/auth/authSlice";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Browse Jobs", href: "/browser-job" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Blog", href: "/blog" },
  { name: "Apply", href: "/apply-job" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); 

  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.auth.user); // Get user state from Redux

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser()); // Clear Redux user state
  };

  return (
    <header
      className={`w-full h-[105px] fixed top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/70 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <nav
        className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex justify-between items-center h-full"
        role="navigation"
      >
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="logo" width={130} height={80} />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-5 md:gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-primary">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Section: Show Sign In or User Icon */}
        <div className="hidden md:block relative">
          {user ? (
            // If user is logged in, show user icon with dropdown menu
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="focus:outline-none"
              >
                <Image
                  src={userIcon}
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer"
                />
              </button>

              {/* User Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                  <Link href="/MyProfile">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</p>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // If user is not logged in, show Sign In button
            <Link href="/register">
              <button className="px-5 py-2 bg-primary text-white rounded-lg">
                Sign In
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg fixed top-[105px] left-0 w-full z-40">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-primary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile User Section */}
          <div className="flex justify-center py-4">
            {user ? (
              <div className="flex flex-col items-center">
                <Image
                  src={userIcon}
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full mb-2"
                />
                <Link href="/MyProfile">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full px-5 py-2 bg-gray-200 rounded-lg mb-2"
                  >
                    Profile
                  </button>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-5 py-2 bg-red-500 text-white rounded-lg"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/register">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-5 py-2 bg-primary text-white rounded-lg"
                >
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

