import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";

import { Layout } from "~ts/components/Layout";
import { IPostPageQuery, TPostLink, TTagLink } from "~ts/typings";

interface IPageProps {
  data: IPostPageQuery;
  pageContext: {
    tags: TTagLink[];
    previous: TPostLink | null;
    next: TPostLink | null;
  };
}

const PostPage = ({ data, pageContext }: IPageProps) => {
  console.log(data);
  console.log(pageContext);

  return (
    <Layout
      title={data.post.frontmatter.title}
      description={data.post.frontmatter.excerpt}
    >
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
