import React from "react";

import { IContainerProps } from "~ts/typings";

import { Footer } from "./Footer";
import { Head } from "./Head";
import { Header } from "./Header";
import { SEO } from "./SEO";

interface ILayoutProps extends IContainerProps {
  title: string;
  description?: string;
  imageUrl?: string;
  pageUrl?: string;
}

export const Layout = ({
  children,
  title,
  description,
  imageUrl,
  pageUrl
}: ILayoutProps) => (
  <>
    <SEO
      title={title}
      description={description}
      imageUrl={imageUrl}
      pageUrl={pageUrl}
    />
    <Head />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
