import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const PaymentSuccessful = () => {
  return (
    <div className="flex h-[79vh] items-center justify-center">
      <div className="bg-white p-6 md:mx-auto">
        <svg viewBox="0 0 24 24" className="mx-auto my-6 h-16 w-16 text-green-600">
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h1 className="mb-5 text-center text-base font-semibold text-gray-900 md:text-5xl">付款成功!</h1>
          <p className="my-2 mb-5 text-3xl text-gray-600">感謝您完成安全的線上付款。</p>
          <p className="text-2xl"> 祝你有美好的一天！</p>
          <div className="py-10 text-center">
            <Link href="/" className={buttonVariants()}>
              返回首頁
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
