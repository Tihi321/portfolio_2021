import React from "react";
import styled from "styled-components";

import { BottomLineContainer } from "~ts/components/Containers";
import { HeadingLink, ImageLink, TagLink } from "~ts/components/Links";
import { EHeadingSizes, EPostLinkSizes } from "~ts/enums";
import { TPostLinkSizes } from "~ts/typings";

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
  size = EPostLinkSizes.Regular,
  tags = []
}: IPostLinkProps) => (
  <BottomLineContainer>
    <HeadingLinkStyled
      text={text}
      to={to}
      size={
        size === EPostLinkSizes.Regular
          ? EHeadingSizes.Medium
          : EHeadingSizes.Regular
      }
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
    <PostLink text={text} to={to} size={EPostLinkSizes.Regular} tags={tags} />
  </FeaturedPostLinkContainer>
);
