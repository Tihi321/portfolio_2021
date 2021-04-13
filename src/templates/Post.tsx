import { graphql } from "gatsby";
import React from "react";

import { IPostPageQuery } from "../definitions";

interface IPageProps {
  data: IPostPageQuery;
  pageContext: {
    tags: {
      tag: string;
      path: string;
    }[];
    paged: number;
  };
}

const Post = ({ data, pageContext }: IPageProps) => {
  console.log(data);
  console.log(pageContext);

  return <div>Post</div>;
};

export const query = graphql`
  query PostQuery($id: String) {
    post: allMdx(filter: { id: { eq: $id } }) {
      edges {
        node {
          frontmatter {
            title
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default Post;
