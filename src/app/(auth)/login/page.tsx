import SectionPadding from "@/components/SectionPadding";
import LoginForm from "./_components/LoginForm";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({ title: "登入" });

const Login = () => {
  return (
    <SectionPadding container>
      <div className="rounded-xl border border-black bg-white p-6 md:mx-auto md:w-[636px] md:p-10">
        <LoginForm />
      </div>
    </SectionPadding>
  );
};

export default Login;
