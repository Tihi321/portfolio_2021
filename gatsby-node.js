const {
  onCreateNode,
  createPages,
  createSchemaCustomization
} = require("./gatsby");

module.exports = {
  onCreateNode,
  createPages,
  createSchemaCustomization,
  onCreateWebpackConfig: ({ actions }) => {
    actions.setWebpackConfig({
      node: {
        // eslint-disable-next-line id-length
        fs: "empty",
        global: true
      }
    });
  }
};
