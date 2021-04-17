import React from "react";
import styled from "styled-components";

import { Heading, TextSize } from "~ts/components/Common";
import { BottomLineContainer } from "~ts/components/Containers";
import { FeaturedTagLink } from "~ts/components/Links";
import { EHeadingSizes, ETextSizes } from "~ts/enums";
import { IStyledProps, TTagLink } from "~ts/typings";

interface IPostHeaderProps extends IStyledProps {
  tags: TTagLink[];
  title: string;
  readingTime: string;
  imageLink: string;
}

const ImageStyled = styled.img`
  display: block;
`;

const HeadingStyled = styled(Heading)`
  text-align: center;
`;

const PostLinkFooterStyled = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: baseline;
`;

const ReadingTimeStyled = styled(TextSize)`
  margin-left: auto;
`;

export const PostHeader = ({
  title,
  imageLink,
  readingTime,
  className,
  tags = []
}: IPostHeaderProps) => (
  <BottomLineContainer className={className}>
    <HeadingStyled size={EHeadingSizes.Large}>{title}</HeadingStyled>
    <ImageStyled src={imageLink} />
    <PostLinkFooterStyled>
      {tags &&
        tags.map((tag, index) => (
          <FeaturedTagLink
            key={`${title}-${tag.name}-${index}`}
            to={tag.path}
            text={tag.name}
            active
          />
        ))}
      <ReadingTimeStyled size={ETextSizes.Tiny}>
        {readingTime}
      </ReadingTimeStyled>
    </PostLinkFooterStyled>
  </BottomLineContainer>
);
