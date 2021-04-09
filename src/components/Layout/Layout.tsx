import React from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { SEO } from "./SEO";

interface ILayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ children, title }: ILayoutProps) => (
  <>
    <SEO title={title} />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
