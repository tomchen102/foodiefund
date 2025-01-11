"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaThList } from "react-icons/fa";

import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const params = useParams();
  const [currentPath, setCurrentPath] = useState("");
  const { plan_id } = params;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const links = [
    { href: `/dashboard/${plan_id}`, label: "募資總攬" },
    { href: `/dashboard/${plan_id}/edits`, label: "修改計畫" },
    { href: `/dashboard/${plan_id}/rewards`, label: "計畫回饋" },
    { href: `/dashboard/${plan_id}/payments`, label: "金流申請/管理" },
    { href: `/dashboard/${plan_id}/faqs`, label: "常見問答管理" },
    { href: `/dashboard/${plan_id}/news`, label: "最新消息管理" },
    { href: `/dashboard/${plan_id}/orders-payments`, label: "訂單金流管理" },
  ];

  const isActive = (href: string) => {
    if (href === `/dashboard/${plan_id}`) {
      return currentPath === href;
    }
    return currentPath.startsWith(href);
  };

  return (
    <nav className="hidden h-full bg-[#d6f4f0] py-3 md:block">
      <div className="flex justify-center">
        <ul className="w-36 text-gray-900">
          <div className="flex items-center gap-2">
            <FaThList></FaThList>提案紀錄
          </div>
          {links.map((link) => (
            <li className="w-full px-4 py-2" key={link.href}>
              <Link
                href={link.href}
                className={cn("border-l-2 pl-3", {
                  "border-secondary text-secondary": isActive(link.href),
                  "border-transparent text-primary-dark hover:border-secondary": !isActive(link.href),
                })}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
