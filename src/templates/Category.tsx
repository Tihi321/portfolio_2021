import { graphql } from "gatsby";
import React from "react";

import { PostsPage } from "~ts/components/Posts";
import { IPostsProps } from "~ts/typings";

const CategoryPage = ({ data, pageContext }: IPostsProps) => (
  <PostsPage context={pageContext} posts={data.data.posts} />
);

export const query = graphql`
  query CategoryQuery($tag: [String], $limit: Int, $skip: Int) {
    data: allMdx(
      filter: { frontmatter: { tags: { in: $tag }, publish: { eq: true } } }
      limit: $limit
      skip: $skip
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
