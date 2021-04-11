import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

interface ISEOProps {
  title: string;
}

interface ISiteQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: {
        name: string;
      };
    };
  };
}

export const SEO = ({ title }: ISEOProps) => {
  const { site }: ISiteQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
          }
        }
      }
    `
  );

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: site.siteMetadata.description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author.name
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.description
        }
      ]}
    />
  );
};