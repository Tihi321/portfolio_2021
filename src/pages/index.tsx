import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import { TextSize } from "~ts/components/Common";
import { Layout } from "~ts/components/Layout";
import { InternalLink } from "~ts/components/Links";
import { EBreakpoints, EInternalLinks, ESide, ETextSizes } from "~ts/enums";
import { media } from "~ts/utils";

const HomeContainerStyled = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;

  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
`;

const TitleStyled = styled(TextSize)`
  margin: 20px 0;
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
      intro: string;
    };
  };
  allMdx: {
    edges: TBlogData[];
  };
};

const Home = ({ data }: { data: TSiteMetaWithBlog }) => {
  const posts = data.allMdx.edges;

  return (
    <Layout title="Home">
      <HomeContainerStyled>
        <TitleStyled size={ETextSizes.Large}>
          {data.site.siteMetadata.intro}
        </TitleStyled>
        <div>
          Links:
          <InternalLink to={EInternalLinks.WORKS}>Works</InternalLink>
        </div>
        <p>{posts.map(post => post.node.frontmatter.title)}</p>
      </HomeContainerStyled>
    </Layout>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        intro
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
