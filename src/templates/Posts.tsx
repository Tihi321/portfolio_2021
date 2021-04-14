import { IPostsPageQuery, IPostsPagination } from "@typings";
import { graphql } from "gatsby";
import React from "react";

interface IPageContext extends IPostsPagination {
  tags: {
    tag: string;
    path: string;
  }[];
}

interface IPageProps {
  data: IPostsPageQuery;
  pageContext: IPageContext;
}

const Posts = ({ data, pageContext }: IPageProps) => {
  console.log(data);
  console.log(pageContext);

  return <div>Posts</div>;
};

export const query = graphql`
  query PostsQuery($limit: Int, $skip: Int) {
    posts: allMdx(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            thumbnail {
              publicURL
            }
          }
          fields {
            path
          }
        }
      }
    }
  }
`;

export default Posts;
