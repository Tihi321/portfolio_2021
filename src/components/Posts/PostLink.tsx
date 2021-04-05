import React from "react";
import styled from "styled-components";

import { BottomLineContainer } from "../Containers/BottomLineContainer";
import { HeadingLink } from "../Links/HeadingLink";
import { ImageLink } from "../Links/ImageLink";
import { TagLink } from "../Links/TagLink";

export type TPostLinkSizes = "regular" | "small";

interface ILinkProps {
  text: string;
  to: string;
  tags?: { to: string; text: string }[];
}

interface IPostLinkProps extends ILinkProps {
  size: TPostLinkSizes;
}

interface IFeaturedPostLinkProps extends ILinkProps {
  imageLink: string;
}

const HeadingLinkStyled = styled(HeadingLink)`
  padding-bottom: 0;
`;

const TagLinkStyled = styled(TagLink)`
  padding-right: 5px;
`;

const ImageLinkStyled = styled(ImageLink)`
  margin-bottom: 5px;
`;

const FeaturedPostLinkContainer = styled.div``;

export const PostLink = ({
  text,
  to,
  size = "regular",
  tags = []
}: IPostLinkProps) => (
  <BottomLineContainer>
    <HeadingLinkStyled
      text={text}
      to={to}
      size={size === "regular" ? "medium" : "regular"}
    />
    {tags &&
      tags.map((tag, index) => (
        <TagLinkStyled
          key={`${text}-${tag.text}-${index}`}
          to={tag.to}
          text={tag.text}
        />
      ))}
  </BottomLineContainer>
);

export const FeaturedPostLink = ({
  text,
  to,
  imageLink,
  tags = []
}: IFeaturedPostLinkProps) => (
  <FeaturedPostLinkContainer>
    <ImageLinkStyled alt={text} to={to} src={imageLink} />
    <PostLink text={text} to={to} size="regular" tags={tags} />
  </FeaturedPostLinkContainer>
);
