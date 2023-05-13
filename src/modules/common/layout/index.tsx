import React, { Fragment } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

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
    <section className={inter.className}>
      <Head>
        <title>{title || "Login"}</title>
        <meta name="description" content="Haastrup Mall Limited" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
