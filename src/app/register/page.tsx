import React from "react";
import RegisterForm from "./_components/RegisterForm";
import SectionPadding from "@/components/SectionPadding";

const Register = () => {
  return (
    <SectionPadding className="container px-3 xl:px-0">
      <div className="rounded-xl border border-black bg-white p-6 md:mx-auto md:w-[636px] md:p-10">
        <RegisterForm />
      </div>
    </SectionPadding>
  );
};

export default Register;
