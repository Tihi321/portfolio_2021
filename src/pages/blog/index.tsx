import { graphql, PageProps } from "gatsby";
import React from "react";

import { Layout } from "../../components/Layout/Layout";

const Blog = ({ data }: PageProps) => {
  console.log(data);

  return (
    <Layout title="Blog">
      <h1>Blog:</h1>
    </Layout>
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
            excerpt
          }
          excerpt
        }
      }
    }
  }
`;

export default Blog;
