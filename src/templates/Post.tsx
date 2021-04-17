import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import styled from "styled-components";

import { Layout } from "~ts/components/Layout";
import { PostHeader } from "~ts/components/Posts";
import { EBreakpoints, ESide } from "~ts/enums";
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

const PostPage = ({ data, pageContext }: IPageProps) => {
  console.log(data);
  console.log(pageContext);

  return (
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
      <MDXRenderer>{data.post.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query PostQuery($id: String) {
    post: mdx(id: { eq: $id }) {
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
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
