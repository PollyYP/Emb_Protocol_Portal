import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "RTEDC Protocol Portal",
  description:
    "A guide for new Thai diplomats on arrival procedures and OFM protocols.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <Header />
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}