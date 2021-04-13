export interface IPostsPageQuery {
  data: {
    allMdx: {
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
    allMdx: {
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
