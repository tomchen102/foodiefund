import Image from "next/image";
import React from "react";

import { StepProps } from "../../type";

const StepItem = ({ step }: StepProps) => {
  return (
    <div>
      <div className="font-bold text-gray">
        <div className="text-center md:text-left md:text-xl">STEP</div>
        <div className="text-center text-2xl md:text-left md:text-5xl">0{step.id}</div>
      </div>
      <div className="flex h-[15rem] items-end md:h-[22rem]">
        <div className="flex items-center">
          <div className="relative rounded bg-gray-100 p-3 pt-10 md:min-h-[15rem] md:p-10 md:pt-16">
            <Image
              src={step.imageUrl}
              alt="Cropped Image"
              width={160}
              height={160}
              className="absolute -top-[70px] left-1/2 h-[100px] w-[100px] -translate-x-1/2 md:-top-[112px] md:h-[160px] md:w-[160px]"
            />
            <div className="flex flex-col gap-3">
              <h4 className="text-center md:text-left">{step.title}</h4>
              <p>{step.description}</p>
            </div>
          </div>
          {step.id % 3 !== 0 && (
            <div className="relative md:h-16 md:w-16">
              <div
                className="absolute inset-0 bg-gray-100"
                style={{ clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)" }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepItem;
