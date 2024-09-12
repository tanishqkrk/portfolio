"use client";

import { Terminal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { LightbulbOff } from "lucide-react";
export default function Header() {
  const path = usePathname();

  return (
    <div className="mt-40 mb-2 flex justify-between items-center max-md:mt-20 max-sm:mt-16 font-semibold ">
      <div className="bg-background text-yellow w-fit flex items-center">
        <Terminal></Terminal>
        <p className="mx-1 text-foreground">curl</p>
        <Link className="" href={"/"}>
          tanishqkrk.dev/
        </Link>
        {path.includes("work") && (
          <Link className="" href={"/work"}>
            work/
          </Link>
        )}
        <div className="h-4 w-3 bg-cursorColor blink"></div>
      </div>

      {/* <div className="text-cursorColor">
        {new Date(Date.now()).getDate().toString() +
          "/" +
          new Date(Date.now()).getMonth().toString() +
          "/" +
          new Date(Date.now()).getFullYear().toString()}
      </div> */}
    </div>
  );
}
