import React from "react";

import { ColumnsContainer } from "~ts/components/Containers";
import { FeaturedPostLink, PostLink } from "~ts/components/Posts";
import { EPostLinkSizes } from "~ts/enums";
import { IPostsContext, TPost } from "~ts/typings";

import { Layout } from "./Layout";

interface IPostsProps {
  posts: TPost[];
  context: IPostsContext;
}

export const Posts = ({ posts, context }: IPostsProps) => {
  console.log(posts);
  console.log(context);

  return (
    <Layout title={context?.tag || "Blog"}>
      <ColumnsContainer>
        <div>Categories</div>
        <div>
          {posts.map((post, index) =>
            index === 0 ? (
              <FeaturedPostLink
                imageLink={post.frontmatter.thumbnail.publicURL}
                to={post.fields.path}
                text={post.frontmatter.title}
              />
            ) : (
              <PostLink
                to={post.fields.path}
                text={post.frontmatter.title}
                size={EPostLinkSizes.Small}
              />
            )
          )}
        </div>
      </ColumnsContainer>
    </Layout>
  );
};
