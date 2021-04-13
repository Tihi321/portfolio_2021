const { createFilePath } = require("gatsby-source-filesystem");
const { resolve } = require("path");
const {
  removePostNameSlugSuffix,
  trimPathSlashes
} = require("./src/utils/path.ts");
const { getSlugFromPath } = require("./src/utils/slug.ts");

const { createTagURI } = require("./src/utils/tags.ts");

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

const onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "Mdx") {
    const { createNodeField } = actions;
    const path = removePostNameSlugSuffix(createFilePath({ node, getNode }));

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
        nodes {
          fields {
            path
            slug
          }
          frontmatter {
            tags
          }
        }
      }
    }
  `);

  let postTags = [];
  let allPosts = [];

  result.data.allMdx.nodes.forEach(
    ({ fields: { path, slug, title }, frontmatter: { tags } }) => {
      postTags = [...postTags, ...tags];
      allPosts = [
        ...allPosts,
        {
          path,
          slug,
          title,
          tags
        }
      ];
    }
  );

  allPosts.forEach(({ path, slug, title, tags }) => {
    createPage({
      path,
      component: resolve("./src/templates/Post.tsx"),
      context: {
        slug,
        title,
        tags: tags.map(tag => ({
          tag,
          path: createTagURI(tag)
        }))
      }
    });
  });

  const allTags = Array.from(new Set(postTags)).map(tag => ({
    tag,
    path: createTagURI(tag)
  }));

  allTags.forEach(({ tag, path }) => {
    createPage({
      path,
      component: resolve("./src/templates/Category.tsx"),
      context: {
        tag: {
          tag,
          path
        },
        tags: allTags
      }
    });
  });

  createPage({
    path: "posts",
    component: resolve("./src/templates/Posts.tsx"),
    context: {
      tags: allTags
    }
  });
};

module.exports = {
  onCreateNode,
  createPages,
  createSchemaCustomization
};
