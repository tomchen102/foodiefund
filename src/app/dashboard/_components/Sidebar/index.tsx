"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";

const Sidebar = () => {
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
    { href: `/dashboard/${plan_id}`, label: "募資總攬", icon: Icons.ListFill },
    { href: `/dashboard/${plan_id}/edits`, label: "修改計畫", icon: Icons.Edit },
    { href: `/dashboard/${plan_id}/rewards`, label: "計畫回饋", icon: Icons.Message },
    { href: `/dashboard/${plan_id}/faqs`, label: "常見問答管理", icon: Icons.Question },
    { href: `/dashboard/${plan_id}/news`, label: "最新消息管理", icon: Icons.News },
    { href: `/dashboard/${plan_id}/payments`, label: "金流申請/管理", icon: Icons.Money },
    { href: `/dashboard/${plan_id}/orders-payments`, label: "訂單金流管理", icon: Icons.Wallet },
  ];

  const isActive = (href: string) => {
    if (href === `/dashboard/${plan_id}`) {
      return currentPath === href;
    }
    return currentPath.startsWith(href);
  };

  return (
    <nav className="hidden h-full w-[220px] bg-[#27272a] pt-5 md:block">
      <div className="flex flex-col justify-center">
        <div className="flex items-center px-4 pb-3 font-bold text-white">提案紀錄</div>
        <ul>
          {links.map((link) => (
            <li className="w-full" key={link.href}>
              <Link
                href={link.href}
                className={cn("flex items-center py-3 hover:bg-gray hover:text-white", {
                  "bg-gray text-white": isActive(link.href),
                  "border-transparent text-gray-400 hover:border-secondary": !isActive(link.href),
                })}
              >
                <div className="ml-5 mr-3">
                  <link.icon className="text-white" />
                </div>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
