export interface IPostsPageQuery {
  data: {
    posts: {
      edges: {
        node: {
          frontmatter: {
            title: string;
            tags: string[];
            thumbnail: {
              publicURL: string;
            };
          };
          fields: {
            path: string;
          };
        };
      }[];
    };
  };
}
export interface IPostPageQuery {
  data: {
    post: {
      edges: {
        node: {
          frontmatter: {
            title: string;
            thumbnail: {
              publicURL: string;
            };
          };
        };
      }[];
    };
  };
}
