const { resolve, join } = require("path");
const { POSTS_PER_PAGE } = require("./constants");
const {
  createPagedPageCallback,
  createTagURI,
  createPaged
} = require("./utils");

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
      component: join(templatesPath, "Post.tsx"),
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

  const paged = createPaged(allPosts.length, POSTS_PER_PAGE);

  allTags.forEach(({ tag, path }) => {
    const tagPosts = allPosts.filter(({ tags }) => tags.includes(tag));

    createPagedPageCallback({
      callback: createPage,
      postsPerPage: POSTS_PER_PAGE,
      numOfPosts: tagPosts.length,
      path,
      component: join(templatesPath, "Category.tsx"),
      context: {
        tag: {
          tag,
          path
        },
        tags: allTags,
        paged
      }
    });
  });

  createPagedPageCallback({
    callback: createPage,
    postsPerPage: POSTS_PER_PAGE,
    numOfPosts: allPosts.length,
    paged,
    path: "posts",
    component: join(templatesPath, "Posts.tsx"),
    context: {
      tags: allTags,
      paged
    }
  });
};

module.exports = {
  createPages
};
