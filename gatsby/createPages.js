const { resolve, join } = require("path");
const { POSTS_PER_PAGE } = require("./constants");
const { createPagedPageCallback, createTagURI } = require("./utils");

const templatesPath = resolve(__dirname, "../src/templates");

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Custom 404 Page
  createPage({
    path: "/404",
    component: join(templatesPath, "404.tsx")
  });

  // Posts Page
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          fields {
            path
          }
          frontmatter {
            tags
          }
          id
        }
      }
    }
  `);

  let postTags = [];
  let allPosts = [];

  result.data.allMdx.nodes.forEach(
    ({ fields: { path }, id, frontmatter: { tags } }) => {
      postTags = [...postTags, ...tags];
      allPosts = [
        ...allPosts,
        {
          path,
          tags,
          id
        }
      ];
    }
  );

  allPosts.forEach(({ path, tags, id }) => {
    createPage({
      path,
      component: join(templatesPath, "Post.tsx"),
      context: {
        id,
        tags: tags.map(tag => ({
          tag,
          src: createTagURI(tag)
        }))
      }
    });
  });

  const allTags = Array.from(new Set(postTags)).map(tag => ({
    tag,
    path: createTagURI(tag)
  }));

  allTags.forEach(({ tag, path }) => {
    const tagPosts = allPosts.filter(({ tags }) => tags.includes(tag));

    createPagedPageCallback({
      callback: createPage,
      postsPerPage: POSTS_PER_PAGE,
      numOfPosts: tagPosts.length,
      path,
      component: join(templatesPath, "Category.tsx"),
      context: {
        tag,
        tags: allTags
      }
    });
  });

  createPagedPageCallback({
    callback: createPage,
    postsPerPage: POSTS_PER_PAGE,
    numOfPosts: allPosts.length,
    path: "posts",
    component: join(templatesPath, "Posts.tsx"),
    context: {
      tags: allTags
    }
  });
};

module.exports = {
  createPages
};
