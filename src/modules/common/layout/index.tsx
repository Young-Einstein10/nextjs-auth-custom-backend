import React from "react";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
});

const Layout = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <html className={inter.className}>
      <Head>
        <title>{title || "Login"}</title>
        <meta name="description" content="Haastrup Mall Limited" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>{children}</main>
    </html>
  );
};

export default Layout;
