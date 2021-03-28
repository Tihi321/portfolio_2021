export type TBlogData = {
  node: {
    frontmatter: {
      date: string;
      title: string;
      description: string;
    };
    excerpt: string;
  };
};
export type TSiteMetaWithBlog = {
  site: {
    siteMetadata: {
      description: string;
      title: string;
    };
  };
  allMdx: {
    edges: TBlogData[];
  };
};
