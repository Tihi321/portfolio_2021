import { graphql } from "gatsby";
import React from "react";

import { IPostsPageQuery } from "../definitions";

interface IPageProps {
  data: IPostsPageQuery;
  pageContext: {
    tags: {
      tag: string;
      path: string;
    }[];
    paged: number;
  };
}

const Posts = ({ data, pageContext }: IPageProps) => {
  console.log(data);
  console.log(pageContext);

  return <div>Posts</div>;
};

export const query = graphql`
  {
    allMdx {
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
