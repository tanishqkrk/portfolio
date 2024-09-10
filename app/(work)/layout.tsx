import { ReactNode } from "react";

export default function WorkLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <main>{children}</main>;
}
