import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "./components/layouts/header";
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers";
import Footer from "./components/layouts/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  weight:["400","500","600","700","800"]
});

export const metadata: Metadata = {
  title: "Sport0n Website",
  description: "Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header /> 
        {children} 
        <Footer/>
      </body>
    </html>
  );
}
