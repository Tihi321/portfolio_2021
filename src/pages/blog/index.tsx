import { graphql, PageProps } from "gatsby";
import React from "react";

const Blog = ({ data }: PageProps) => {
  console.log(data);

  return (
    <>
      <h1>Blog:</h1>
    </>
  );
};

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      edges {
        node {
          frontmatter {
            date(formatString: "Do MMMM YYYY")
            title
            description
          }
          excerpt
        }
      }
    }
  }
`;

export default Blog;
