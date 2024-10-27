"use client";
import SectionPadding from "@/components/SectionPadding";
import LoginForm from "./_components/LoginForm";

const Login = () => {
  return (
    <SectionPadding className="container px-3 xl:px-0">
      <div className="rounded-xl border border-black bg-white p-6 md:mx-auto md:w-[636px] md:p-10">
        <LoginForm />
      </div>
    </SectionPadding>
  );
};

export default Login;
