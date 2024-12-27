"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { MenuProps } from "../../types";

const Navbar = ({ menuList }: MenuProps) => {
  return (
    <nav className="hidden h-full md:block">
      <ul className="z-10 flex h-full gap-8 space-x-5">
        {menuList.map((item) => (
          <li className="group relative" key={item.title}>
            <Link
              href={item.href}
              className={cn(
                "flex h-full w-fit items-center justify-center px-1 text-base font-bold text-primary-dark",
                {}
              )}
            >
              {item.title}
              <span className="absolute bottom-3 left-0 h-[2px] w-full bg-transparent group-hover:bg-secondary"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
