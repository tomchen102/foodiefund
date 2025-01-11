"use client";
import Navbar from "../_components/Navbar";
import MobileNavbar from "../_components/Navbar/MobileNavbar";

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-3">
          <Navbar />
          <MobileNavbar />
        </div>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </>
  );
};

export default LayoutContent;
