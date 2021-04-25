import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Heading, TextSize } from "~ts/components/Common";
import { Layout } from "~ts/components/Layout";
import { FeaturedHeadingLink } from "~ts/components/Links";
import { PostLink } from "~ts/components/Posts";
import {
  EBreakpoints,
  EHeadingSizes,
  EInternalLinks,
  EPostLinkSizes,
  ESide,
  ETextSizes
} from "~ts/enums";
import { TTagLink } from "~ts/typings";
import { connectTagLinks, media } from "~ts/utils";

const HomeContainerStyled = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr;
  height: 100%;
  align-content: baseline;

  ${media(EBreakpoints.TABLET, ESide.UP)} {
    grid-gap: 20px 40px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-content: space-around;
  }
`;

const TitleStyled = styled(TextSize)`
  line-height: 1.4;
  ${media(EBreakpoints.TABLET, ESide.UP)} {
    grid-column: 1 / span 4;
  }
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    grid-column: 1 / span 3;
  }
`;

const HomeLinksContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  ${media(EBreakpoints.TABLET, ESide.UP)} {
    grid-column: 1 / span 4;
    flex-direction: row;
  }
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    flex-direction: column;
    grid-column: 4 / span 1;
  }
`;

const FeaturedPostsContainerStyled = styled.div`
  ${media(EBreakpoints.TABLET, ESide.UP)} {
    grid-column: 1 / span 4;
  }
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    grid-column: 1 / span 2;
  }
`;

type TPostData = {
  fields: {
    path: string;
    readingTime: {
      text: string;
    };
  };
  frontmatter: {
    title: string;
    tags: string[];
  };
};

type TSiteMetaWithBlog = {
  site: {
    siteMetadata: {
      intro: string;
    };
  };
  data: {
    posts: TPostData[];
  };
};

interface IHomePageProps {
  data: TSiteMetaWithBlog;
  pageContext: {
    tags: TTagLink[];
  };
}

const HomePage = ({ data, pageContext }: IHomePageProps) => (
  <Layout title="Home">
    <HomeContainerStyled>
      <TitleStyled size={ETextSizes.Huge}>
        {data.site.siteMetadata.intro}
      </TitleStyled>
      <FeaturedPostsContainerStyled>
        <Heading size={EHeadingSizes.Regular}>Featured Posts</Heading>
        {data.data.posts.map(post => (
          <PostLink
            key={post.frontmatter.title}
            readingTime={post.fields.readingTime.text}
            text={post.frontmatter.title}
            to={post.fields.path}
            size={EPostLinkSizes.Small}
            tags={connectTagLinks(pageContext.tags)(post.frontmatter.tags)}
          />
        ))}
      </FeaturedPostsContainerStyled>
      <HomeLinksContainerStyled>
        <FeaturedHeadingLink text="Blog" to={EInternalLinks.BLOG} />
        <FeaturedHeadingLink text="Works" to={EInternalLinks.WORKS} />
      </HomeLinksContainerStyled>
    </HomeContainerStyled>
  </Layout>
);

export const query = graphql`
  {
    site {
      siteMetadata {
        intro
      }
    }
    data: allMdx(
      filter: { frontmatter: { featured: { eq: true } } }
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      posts: nodes {
        fields {
          path
          readingTime {
            text
          }
        }
        frontmatter {
          title
          tags
        }
      }
    }
  }
`;

export default HomePage;
