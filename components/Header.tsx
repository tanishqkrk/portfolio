"use client";

import { Lock, Terminal, Unlock } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Header() {
  const path = usePathname();
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    setFullUrl(window.location.href);
  }, [path]);

  return (
    <div className="mt-40 mb-2 flex justify-between items-center max-md:mt-20 max-sm:mt-16 font-semibold max-md:text-sm">
      <div className="bg-background text-green w-fit flex items-center">
        <Terminal></Terminal>
        <p className="mx-1 text-foreground">curl</p>
        <Link className="" href={"/"}>
          {fullUrl.replace("http://", "").replace("https://", "")}
        </Link>
        <div className="h-4 w-3 bg-cursorColor blink"></div>
      </div>
      <div>
        {fullUrl.includes("https") ? (
          <Lock size={16} className=" text-brightGreen"></Lock>
        ) : (
          <Unlock size={16} className=" text-brightRed"></Unlock>
        )}
      </div>
    </div>
  );
}
