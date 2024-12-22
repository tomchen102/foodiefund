"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaThList } from "react-icons/fa";
const Navbar = () => {
  const pathname = usePathname();
  const params = useParams();
  const [currentPath, setCurrentPath] = useState("");
  const { id } = params;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const links = [
    { href: `/projects/${id}`, label: "募資總攬" },
    { href: `/projects/${id}/edits`, label: "修改計畫" },
    { href: `/projects/${id}/rewards`, label: "計畫回饋" },
    { href: `/projects/${id}/payments`, label: "金流申請/管理" },
    { href: `/projects/${id}/faqs`, label: "常見問答管理" },
    { href: `/projects/${id}/news`, label: "最新消息管理" },
    { href: `/projects/${id}/orders-payments`, label: "訂單金流管理" },
  ];

  const isActive = (href: string) => {
    if (href === `/projects/${id}`) {
      return currentPath === href;
    }
    return currentPath.startsWith(href);
  };

  return (
    <nav className="bg-[#d6f4f0] py-3">
      <div className="flex justify-center">
        <ul className="w-36 text-sm font-medium text-gray-900">
          <div className="flex items-center gap-2">
            <FaThList></FaThList>提案紀錄
          </div>
          {links.map((link) => (
            <li className="w-full px-4 py-2" key={link.href}>
              <Link
                href={link.href}
                className={cn("border-l-2", {
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
