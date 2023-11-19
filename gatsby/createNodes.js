const { createFilePath } = require("gatsby-source-filesystem");

const {
  removePostNameSlugSuffix,
  getSlugFromPath,
  trimPathSlashes
} = require("./utils");

const onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "Mdx") {
    const { createNodeField } = actions;
    const path = removePostNameSlugSuffix(createFilePath({ node, getNode }));

    createNodeField({
      node,
      name: "readingTime",
      value: {
        text: "1 min"
      }
    });

    createNodeField({
      node,
      name: "path",
      value: path
    });

    createNodeField({
      node,
      name: "slug",
      value: getSlugFromPath(trimPathSlashes(path))
    });
  }
};

module.exports = {
  onCreateNode
};
