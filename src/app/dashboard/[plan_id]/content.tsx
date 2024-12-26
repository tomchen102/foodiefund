"use client";
import MobileNavbar from "./@Navbar/MobileNavbar";
import Navbar from "./@Navbar/page";

export const LayoutContent = ({ children }: { children: React.ReactNode }) => {
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
