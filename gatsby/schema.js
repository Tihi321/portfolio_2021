const createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const postTypeDefs = [
    schema.buildObjectType({
      name: "Mdx",
      frontmatter: {
        title: "String!",
        date: "Date!",
        tags: "[String!]!",
        thumbnail: "String!",
        excerpt: "String",
        publish: "Boolean"
      },
      fields: {
        path: "String!",
        slug: "String!"
      },
      interfaces: ["Node"]
    })
  ];
  createTypes(postTypeDefs);
};

module.exports = {
  createSchemaCustomization
};
