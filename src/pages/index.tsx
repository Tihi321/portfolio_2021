import { graphql } from "gatsby";
import React from "react";

import { TSiteMetaWithBlog } from "../types/query";

const Home = ({ data }: { data: TSiteMetaWithBlog }) => {
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;
  const posts = data.allMdx.edges;

  return (
    <>
      <h1>{siteTitle}</h1>
      <p>{siteDescription}</p>
      <p>{posts.map(post => post.node.frontmatter.title)}</p>
    </>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
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

export default Home;
