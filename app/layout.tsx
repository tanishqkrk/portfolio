import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
// import { Arimo , Montaga, Source_Code_Pro } from "next/font/google";
import { Fira_Code } from "next/font/google";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Tanishqkrk",
  description: "Peek into the life of a SWE and clash of clans player.",
};

const armio = Fira_Code({
  weight: ["400"],
  subsets: ["latin"],

  // display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${armio.className} antialiased px-72 text-zinc-600 max-xl:px-40 max-lg:px-20 max-md:px-16 max-sm:px-6`}
      >
        <Header /> {children}
      </body>
    </html>
  );
}
