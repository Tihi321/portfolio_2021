import React from "react";

import { ColumnsContainer } from "~ts/components/Containers";
import { FeaturedPostLink, PostLink } from "~ts/components/Posts";
import { EBreakpoints, EPostLinkSizes } from "~ts/enums";
import { useMediaQuery } from "~ts/hooks";
import { IPostsContext, TPost } from "~ts/typings";

import { TagLinkFeaturedList, TagLinkList } from "../List";
import { Layout } from "./Layout";

interface IPostsProps {
  posts: TPost[];
  context: IPostsContext;
}

export const Posts = ({ posts, context }: IPostsProps) => {
  console.log(posts);
  console.log(context);
  const isTablet = useMediaQuery(EBreakpoints.TABLET);

  return (
    <Layout title={context?.tag || "Blog"}>
      <ColumnsContainer>
        <div>
          {isTablet ? (
            <TagLinkList
              tags={context.tags}
              title="Categories"
              selected={context?.tag}
            />
          ) : (
            <TagLinkFeaturedList
              tags={context.tags}
              title="Categories"
              selected={context?.tag}
            />
          )}
        </div>
        <div>
          {posts.map((post, index) =>
            index === 0 ? (
              <FeaturedPostLink
                key={post.frontmatter.title}
                imageLink={post.frontmatter.thumbnail.publicURL}
                to={post.fields.path}
                text={post.frontmatter.title}
              />
            ) : (
              <PostLink
                key={post.frontmatter.title}
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
