"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const Header: FC = () => {
  const pathname = usePathname();

  return (
    <div className="bg-blue-500">
      <div className="flex justify-start gap-5 p-5 container mx-auto text-white">
        <div className={pathname === "/" ? "font-bold" : ""}>
          <Link href="/">Home</Link>
        </div>
        <div>|</div>
        <div className={pathname === "/profile" ? "font-bold" : ""}>
          <Link href="/profile">Profile</Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
