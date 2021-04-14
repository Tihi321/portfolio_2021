import React from "react";

import { IContainerProps } from "~ts/typings";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { SEO } from "./SEO";

interface ILayoutProps extends IContainerProps {
  title: string;
}

export const Layout = ({ children, title }: ILayoutProps) => (
  <>
    <SEO title={title} />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
