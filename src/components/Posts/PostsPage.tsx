import React from "react";

import {
  ColumnsContainer,
  TagsContainerMobileStyled,
  TagsContainerTabletStyled
} from "~ts/components/Containers";
import { Layout } from "~ts/components/Layout";
import { TagLinkFeaturedList, TagLinkList } from "~ts/components/List";
import { FeaturedPostLink, PostLink } from "~ts/components/Posts";
import { EBreakpoints, EPostLinkSizes } from "~ts/enums";
import { useMediaQuery } from "~ts/hooks";
import { IPostsContext, TPost } from "~ts/typings";
import { connectTagLinks } from "~ts/utils";

interface IPostsProps {
  posts: TPost[];
  context: IPostsContext;
}

export const PostsPage = ({ posts, context }: IPostsProps) => {
  const isTablet = useMediaQuery(EBreakpoints.TABLET);

  return (
    <Layout title={context?.tag || "Blog"}>
      <ColumnsContainer>
        {isTablet ? (
          <TagsContainerTabletStyled>
            <TagLinkList
              tags={context.tags}
              title="Categories"
              selected={context?.tag}
            />
          </TagsContainerTabletStyled>
        ) : (
          <TagsContainerMobileStyled>
            <TagLinkFeaturedList
              tags={context.tags}
              title="Categories"
              selected={context?.tag}
            />
          </TagsContainerMobileStyled>
        )}
        <div>
          {posts.map((post, index) =>
            index === 0 ? (
              <FeaturedPostLink
                key={post.frontmatter.title}
                imageLink={post.frontmatter.thumbnail.publicURL}
                to={post.fields.path}
                text={post.frontmatter.title}
                readingTime={post.fields.readingTime.text}
                tags={connectTagLinks(context.tags)(post.frontmatter.tags)}
              />
            ) : (
              <PostLink
                key={post.frontmatter.title}
                to={post.fields.path}
                text={post.frontmatter.title}
                size={EPostLinkSizes.Small}
                readingTime={post.fields.readingTime.text}
                tags={connectTagLinks(context.tags)(post.frontmatter.tags)}
              />
            )
          )}
        </div>
      </ColumnsContainer>
    </Layout>
  );
};
