const { createFilePath } = require("gatsby-source-filesystem");
const { resolve } = require("path");

const onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions;
    createNodeField({
      node,
      name: "slug",
      value: createFilePath({ node, getNode })
    });
  }
};

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Custom 404 Page
  createPage({
    path: "/404",
    component: resolve("./src/templates/404.tsx")
  });

  // Posts Page
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
            }
            slug
          }
        }
      }
    }
  `);

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: resolve("./src/templates/Post.tsx"),
      context: {
        slug: node.slug,
        title: node.frontmatter.title
      }
    });
  });
};

module.exports = {
  onCreateNode,
  createPages
};
