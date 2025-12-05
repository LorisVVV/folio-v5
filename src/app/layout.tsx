import type { Metadata } from "next";
import "./globals.css";
import "@/font/Satoshi_Complete/Fonts/WEB/css/satoshi.css"

export const metadata: Metadata = {
  title: "Loris Vullion",
  description: "Loris Vullion's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
