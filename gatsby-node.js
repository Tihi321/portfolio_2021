const { createFilePath } = require("gatsby-source-filesystem");
const { resolve } = require("path");

const onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "Mdx") {
    const { createNodeField } = actions;
    const path = createFilePath({ node, getNode }).replace(/\[(.*?)\]/g, "");

    const slugArray = path.slice(1, -1).split("/");

    createNodeField({
      node,
      name: "path",
      value: path
    });

    createNodeField({
      node,
      name: "slug",
      value: slugArray[slugArray.length - 1]
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
            fields {
              path
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.path,
      component: resolve("./src/templates/Post.tsx"),
      context: {
        slug: node.fields.slug,
        title: node.frontmatter.title
      }
    });
  });
};

module.exports = {
  onCreateNode,
  createPages
};
