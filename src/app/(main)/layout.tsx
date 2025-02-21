import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full min-h-screen relative bg-white">
      <Navbar />

      {/* Children wrapper with the clip-wave background */}
      <div className="relative w-full min-h-screen">
        {/* Background shape applied behind children */}
        <div className="fixed top-0 left-0 h-[750px] bg-[#0d6dfcce] clip-wave "></div>

        {/* Children content - stays above background */}
        <div className="relative z-[10]">
          {children}
          <Footer />
        </div>
      </div>

    </main>
  );
};

export default MainLayout;
