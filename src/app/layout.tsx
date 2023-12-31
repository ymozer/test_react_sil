import type { Metadata } from "next";
import { Inter, Open_Sans, Roboto_Mono, Tangerine } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  //👇 Add variable to our object
  variable: "--font-opensans",
});

//👇 Configure the object for our second font
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const tangerine = Tangerine({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-tangerine",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${robotoMono.variable} ${tangerine.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
