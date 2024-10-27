"use client";
import React from "react";
import RegisterForm from "./_components/RegisterForm";

const Register = () => {
  return (
    <div className="container flex h-[79vh] items-center justify-center px-3 xl:px-0">
      <div className="">
        <div className="rounded-xl border border-black bg-white p-6 md:mx-auto md:w-[636px] md:p-10">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
