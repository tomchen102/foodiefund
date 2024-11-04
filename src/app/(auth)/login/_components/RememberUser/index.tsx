import { buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import LocalStorageService from "@/utils/LocalStorageService";
import Link from "next/link";
import { useEffect, useState } from "react";

interface RememberUserProps {
  username: string;
  localStorageService: LocalStorageService;
}

const RememberUser = ({ username, localStorageService }: RememberUserProps) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const rememberUser = localStorageService.getItem("rememberUser");
      if (rememberUser) {
        setIsChecked(true);
      }
    }
  }, [localStorageService]);

  const handleCheckboxChange = (checked: boolean) => {
    if (checked) {
      localStorageService.setItem("rememberUser", username);
    } else {
      localStorageService.removeItem("rememberUser");
    }
    setIsChecked(checked);
  };

  return (
    <div className="flex items-center">
      <Checkbox checked={isChecked} id="terms" onCheckedChange={handleCheckboxChange} />
      <label htmlFor="terms" className="ml-3 text-sm font-medium leading-none hover:cursor-pointer">
        記住帳號
      </label>
      <div className="ml-auto">
        <Link href="" className={buttonVariants({ variant: "link" })}>
          忘記密碼？
        </Link>
      </div>
    </div>
  );
};

export default RememberUser;
