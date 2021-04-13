import { graphql } from "gatsby";
import React from "react";

import { IPostsPageQuery } from "../definitions";

interface IPageProps {
  data: IPostsPageQuery;
  pageContext: {
    tag: string;
    tags: {
      name: string;
      path: string;
    }[];
    paged: number;
  };
}

const Category = ({ data, pageContext }: IPageProps) => {
  console.log(data);
  console.log(pageContext);

  return <div>Category</div>;
};

export const query = graphql`
  query CategoryQuery($tag: [String]) {
    allMdx(filter: { frontmatter: { tags: { in: $tag } } }) {
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
