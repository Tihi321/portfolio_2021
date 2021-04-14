import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Layout } from "~ts/components/Layout";
import { InternalLink } from "~ts/components/Links";
import { EInternalLinks } from "~ts/enums";
import { textColor } from "~ts/themes";

const TitleStyled = styled.h1`
  margin: 20px 0;
  padding: 15px;
  color: ${textColor};
`;

type TBlogData = {
  node: {
    frontmatter: {
      date: string;
      title: string;
      excerpt: string;
    };
    excerpt: string;
  };
};

type TSiteMetaWithBlog = {
  site: {
    siteMetadata: {
      description: string;
      title: string;
    };
  };
  allMdx: {
    edges: TBlogData[];
  };
};

const Home = ({ data }: { data: TSiteMetaWithBlog }) => {
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;
  const posts = data.allMdx.edges;

  return (
    <Layout title="Home">
      <TitleStyled>{siteTitle}</TitleStyled>
      <div>
        Links:
        <InternalLink to={EInternalLinks.WORKS}>Works</InternalLink>
      </div>
      <p>{siteDescription}</p>
      <p>{posts.map(post => post.node.frontmatter.title)}</p>
    </Layout>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      edges {
        node {
          frontmatter {
            date(formatString: "Do MMMM YYYY")
            title
            excerpt
          }
          excerpt
        }
      }
    }
  }
`;

export default Home;
