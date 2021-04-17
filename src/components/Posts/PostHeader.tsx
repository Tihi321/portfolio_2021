import React from "react";
import styled from "styled-components";

import { Heading, TextSize } from "~ts/components/Common";
import { BottomLineContainer } from "~ts/components/Containers";
import { FeaturedTagLink } from "~ts/components/Links";
import { EHeadingSizes, ETextSizes } from "~ts/enums";
import { IStyledProps, TTagLink } from "~ts/typings";

import { FeaturedImage } from "../Images";

interface IPostHeaderProps extends IStyledProps {
  tags: TTagLink[];
  title: string;
  quote?: string;
  readingTime: string;
  imageLink: string;
  date: string;
}

const HeadingStyled = styled(Heading)`
  text-align: center;
`;

const PostLinkFooterStyled = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: baseline;
`;

const ReadingTimeDateStyled = styled(TextSize)`
  margin-left: auto;
`;

export const PostHeader = ({
  title,
  quote,
  imageLink,
  readingTime,
  className,
  date,
  tags = []
}: IPostHeaderProps) => (
  <BottomLineContainer className={className}>
    <HeadingStyled size={EHeadingSizes.Large}>{title}</HeadingStyled>
    <FeaturedImage quote={quote} src={imageLink} alt={title} />
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
      <ReadingTimeDateStyled size={ETextSizes.Tiny}>
        {readingTime} - {date}
      </ReadingTimeDateStyled>
    </PostLinkFooterStyled>
  </BottomLineContainer>
);
