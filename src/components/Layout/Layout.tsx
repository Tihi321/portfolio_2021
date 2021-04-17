import React from "react";

import { IContainerProps } from "~ts/typings";

import { Footer } from "./Footer";
import { Head } from "./Head";
import { Header } from "./Header";
import { SEO } from "./SEO";

interface ILayoutProps extends IContainerProps {
  title: string;
  description?: string;
}

export const Layout = ({ children, title, description }: ILayoutProps) => (
  <>
    <SEO title={title} description={description} />
    <Head />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
