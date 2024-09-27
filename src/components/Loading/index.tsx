import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex select-none items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="relative h-[100px] w-[100px]">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`absolute left-1/2 top-1/2 h-[50px] w-3 origin-bottom animate-fadeIn rounded-md opacity-0 ${index === 1 ? "bg-secondary" : "bg-primary"} `}
            style={{
              transform: `translate(-50%, -100%) rotate(${index * 60}deg)`,
              animationDelay: `${index * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
