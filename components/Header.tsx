"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { LightbulbOff } from "lucide-react";
export default function Header() {
  const path = usePathname();

  return (
    <div className="mt-40 mb-2 flex justify-between items-center max-md:mt-20 max-sm:mt-6">
      <div>
        <Link className="link" href={"/"}>
          tanishqkrk/
        </Link>
        {path.includes("work") && (
          <Link className="link" href={"/work"}>
            work/
          </Link>
        )}
      </div>
      {/* <button>
        <LightbulbOff></LightbulbOff>
      </button> */}
    </div>
  );
}
