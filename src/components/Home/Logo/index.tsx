import Link from "next/link";

import UnoptimizedImage from "@/components/UnoptimizedImage";
import { cn } from "@/lib/utils";

type modeProps = {
  darkMode?: boolean;
};

const Logo = ({ darkMode = false }: modeProps) => {
  return (
    <Link
      href="/"
      className={cn(
        "logo-link mr-auto flex items-center font-bold",
        darkMode ? "gap-3 text-2xl text-white" : "gap-2 text-base"
      )}
    >
      <div className={cn("relative inline-block", darkMode ? "size-8" : "size-6")}>
        <UnoptimizedImage
          src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/logo.png?alt=media&token=50bbd619-ec49-441c-9030-501c4826fb69"
          fill
          sizes="32px"
          className="logo"
          alt="FoodieFund logo"
        />
      </div>
      眾資成城
    </Link>
  );
};

export default Logo;
