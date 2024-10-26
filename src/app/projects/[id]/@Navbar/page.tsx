"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
    { href: `/projects/${id}`, label: "專案內容" },
    { href: `/projects/${id}/news`, label: "最新消息" },
    { href: `/projects/${id}/faq`, label: "常見問答" },
    { href: `/projects/${id}/comments`, label: "留言" },
  ];

  const isActive = (href: string) => {
    if (href === `/projects/${id}`) {
      return currentPath === href;
    }
    return currentPath.startsWith(href);
  };

  return (
    <nav className="bg-[#d6f4f0] py-3">
      <ul className="container flex gap-8 px-3 xl:px-0">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn("block h-12 border-b-2 py-3 font-bold leading-6", {
                "border-secondary text-secondary": isActive(link.href),
                "border-transparent text-tertiary hover:border-secondary": !isActive(link.href),
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
