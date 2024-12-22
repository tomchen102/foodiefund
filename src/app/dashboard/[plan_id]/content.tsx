"use client";
import Navbar from "./@Navbar/page";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="lg:grid lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-3">
          <Navbar />
        </div>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </>
  );
}

export default LayoutContent;
