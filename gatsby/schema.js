const createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const postTypeDefs = [
    schema.buildObjectType({
      name: "Mdx",
      fields: {
        title: "String!",
        date: "Date",
        tags: "[String!]!",
        thumbnail: "String!",
        excerpt: "String!",
        publish: "Boolean"
      },
      interfaces: ["Node"]
    })
  ];
  createTypes(postTypeDefs);
};

module.exports = {
  createSchemaCustomization
};
