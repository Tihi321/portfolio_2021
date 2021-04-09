import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Layout } from "../components/Layout/Layout";
import { TSiteMetaWithBlog } from "../definitions/query/home";
import { getTheme, switchTheme, useSelector, useStore } from "../store";
import { textColor } from "../themes";

const TitleStyled = styled.h1`
  margin: 20px 0;
  padding: 15px;
  color: ${textColor};
`;

const Home = ({ data }: { data: TSiteMetaWithBlog }) => {
  const theme = useSelector(getTheme);
  const { dispatch } = useStore();
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;
  const posts = data.allMdx.edges;

  return (
    <Layout title="Home New">
      <TitleStyled>{siteTitle}</TitleStyled>
      <p>Theme is :{theme}</p>
      <p>{siteDescription}</p>
      <button onClick={() => dispatch(switchTheme())}>switchTheme</button>
      <p>{posts.map(post => post.node.frontmatter.title)}</p>
    </Layout>
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
