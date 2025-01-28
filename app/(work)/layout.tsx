import { ReactNode } from "react";

export default function WorkLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <main className="markdown">{children}</main>;
}
