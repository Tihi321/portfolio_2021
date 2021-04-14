import { graphql } from "gatsby";
import React from "react";

import { IPostsPageQuery, IPostsPagination } from "~ts/typings";

interface IPageContext extends IPostsPagination {
  tag: string;
  tags: {
    tag: string;
    path: string;
  }[];
}

interface IPageProps {
  data: IPostsPageQuery;
  pageContext: IPageContext;
}

const Category = ({ data, pageContext }: IPageProps) => {
  console.log(data);
  console.log(pageContext);

  return <div>Category</div>;
};

export const query = graphql`
  query CategoryQuery($tag: [String], $limit: Int, $skip: Int) {
    posts: allMdx(
      filter: { frontmatter: { tags: { in: $tag } } }
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

export default Category;
