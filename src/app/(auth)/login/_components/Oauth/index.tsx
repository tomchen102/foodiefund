import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { FaLine, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Oauth = () => {
  return (
    <div>
      <div className="flex justify-center pb-6">
        <a
          href="https://accounts.google.com/o/oauth2/v2/auth?client_id=732186448181-fej9b1v1gf3biumcbab30ibq5n9r712u.apps.googleusercontent.com&redirect_uri=https://foodiefund.onrender.com/v1/api/auth/google/callback&response_type=code&scope=email%20profile&access_type=offline"
          className="group flex w-full justify-center rounded-full border bg-[#F8F9FA] py-3 leading-[19.2px] hover:bg-slate-200"
        >
          <FcGoogle className="mr-3" />
          使用 Google 登入
        </a>
      </div>
      <div className="flex justify-center pb-6">
        <a
          href="https://foodiefund.onrender.com/v1/api/auth/Line/callback"
          className="group flex w-full justify-center rounded-full border bg-[#F8F9FA] py-3 leading-[19.2px] hover:bg-slate-200"
        >
          <FaLine className="mr-4" color="#06C755" />
          使用 Line 登入
        </a>
      </div>
      <div className="flex justify-center pb-6 md:pb-10">
        <a
          href="https://foodiefund.onrender.com/v1/api/auth/github/callback"
          className="group flex w-full justify-center rounded-full border bg-[#F8F9FA] py-3 leading-[19.2px] hover:bg-slate-200"
        >
          <FaGithub className="mr-3" color="#232a33" />
          使用 github 登入
        </a>
      </div>

      <div className="text-center leading-6 tracking-wider">
        還未成為會員？
        <Link href="/register" className={buttonVariants({ variant: "link" })}>
          立即註冊
        </Link>
      </div>
    </div>
  );
};

export default Oauth;
