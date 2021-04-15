import { graphql } from "gatsby";
import React from "react";

import { Posts } from "~ts/components/Layout";
import { IPostsProps } from "~ts/typings";

const CategoryPage = ({ data, pageContext }: IPostsProps) => (
  <Posts context={pageContext} posts={data.data.posts} />
);

export const query = graphql`
  query CategoryQuery($tag: [String], $limit: Int, $skip: Int) {
    data: allMdx(
      filter: { frontmatter: { tags: { in: $tag } } }
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      posts: nodes {
        frontmatter {
          title
          tags
          thumbnail {
            publicURL
          }
        }
        fields {
          path
          readingTime {
            text
          }
        }
      }
    }
  }
`;

export default CategoryPage;
