import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import styled from "styled-components";

import { LineContainer } from "~ts/components/Containers";
import { Layout } from "~ts/components/Layout";
import { ArrowLink } from "~ts/components/Links";
import { PostHeader } from "~ts/components/Posts";
import { EArrowLinkSides, EBreakpoints, ESide } from "~ts/enums";
import { IPostPageQuery, TPostLink, TTagLink } from "~ts/typings";
import { media } from "~ts/utils";

interface IPageProps {
  data: IPostPageQuery;
  pageContext: {
    tags: TTagLink[];
    previous: TPostLink | null;
    next: TPostLink | null;
  };
}

const PostHeaderStyled = styled(PostHeader)`
  margin-bottom: 30px;

  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    margin-bottom: 50px;
  }
`;

const PostFooterStyled = styled(LineContainer)`
  display: flex;
  margin-top: 30px;

  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    margin-top: 50px;
  }
`;

const ArrowLinkNextStyled = styled(ArrowLink)`
  margin-left: auto;
`;

const ContentContainerStyled = styled.article`
  display: grid;
`;

const PostPage = ({ data, pageContext }: IPageProps) => (
  <Layout
    title={data.post.frontmatter.title}
    description={data.post.frontmatter.excerpt}
  >
    <PostHeaderStyled
      title={data.post.frontmatter.title}
      imageLink={data.post.frontmatter.thumbnail.publicURL}
      readingTime={data.post.fields.readingTime.text}
      tags={pageContext.tags}
    />
    <ContentContainerStyled>
      <MDXRenderer>{data.post.body}</MDXRenderer>
    </ContentContainerStyled>
    <PostFooterStyled>
      {pageContext.previous && (
        <ArrowLink
          text={pageContext.previous.title}
          to={pageContext.previous.path}
          side={EArrowLinkSides.Left}
        />
      )}
      {pageContext.next && (
        <ArrowLinkNextStyled
          text={pageContext.next.title}
          to={pageContext.next.path}
          side={EArrowLinkSides.Right}
        />
      )}
    </PostFooterStyled>
  </Layout>
);

export const query = graphql`
  query PostQuery($id: String) {
    post: mdx(id: { eq: $id }) {
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        date(formatString: "Do MMMM YYYY")
        title
        excerpt
        thumbnail {
          publicURL
        }
      }
      body
    }
  }
`;

export default PostPage;
