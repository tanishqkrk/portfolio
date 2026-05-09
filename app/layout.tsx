import type { Metadata } from "next";
import "./globals.css";
import //  Arimo,
// Montaga,
//  Source_Code_Pro
"next/font/google";
import {
  // Coming_Soon,
  // Condiment,
  // Fira_Code,
  // Lexend_Exa,
  // Montserrat,
  // Source_Code_Pro,
  // Space_Grotesk,
  // Ubuntu,
  // JetBrains_Mono,
  // VT323,
  IBM_Plex_Mono,
} from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
//
export const metadata: Metadata = {
  title: "Tanishqkrk",
  description: "Peek into the life of a SWE and clash of clans player.",
};

const armio = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
// const armio = JetBrains_Mono({
//   weight: ["400"],
//   subsets: ["latin"],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-background text-foreground" lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </head>
      <body
        className={`${armio.className} antialiased px-72  max-xl:px-40 max-lg:px-20 max-md:px-16 max-sm:px-4 `}
      >
        <Header /> {children} <Footer />
      </body>
    </html>
  );
}
