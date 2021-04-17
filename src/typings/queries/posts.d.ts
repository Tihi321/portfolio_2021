export type TPost = {
  frontmatter: {
    title: string;
    tags: string[];
    thumbnail: {
      publicURL: string;
    };
  };
  fields: {
    path: string;
    readingTime: {
      text: string;
    };
  };
};

export interface IPostsPageQuery {
  data: {
    posts: TPost[];
  };
}
export interface IPostPageQuery {
  post: {
    fields: {
      readingTime: {
        text: string;
      };
    };
    frontmatter: {
      date: string;
      title: string;
      excerpt: string;
      thumbnail: {
        publicURL: string;
      };
    };
    body: string;
  };
}
