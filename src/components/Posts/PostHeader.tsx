import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton
} from "react-share";
import styled, { css, useTheme } from "styled-components";

import { Heading, TextSize } from "~ts/components/Common";
import { BottomLineContainer } from "~ts/components/Containers";
import { FeaturedTagLink } from "~ts/components/Links";
import { EBreakpoints, EHeadingSizes, ESide, ETextSizes } from "~ts/enums";
import { sociaColor, socialBackgroundColor } from "~ts/themes";
import { IStyledProps, TTagLink } from "~ts/typings";
import { media } from "~ts/utils";

import { FeaturedImage } from "../Images";

interface IPageQuery {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
}

interface IPostHeaderProps extends IStyledProps {
  tags: TTagLink[];
  title: string;
  quote?: string;
  quotebackground?: string;
  readingTime: string;
  imageLink: string;
  date: string;
  pageUrl: string;
}

const HeadingStyled = styled(Heading)`
  text-align: center;
`;

const PostLinkFooterStyled = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    flex-direction: row;
  }
`;

const TagsFooterStyled = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
`;

const DateTimeStyled = styled(TextSize)`
  margin: 10px 0;

  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    margin: 0 0 0 10px;
  }
`;

const socialStyles = css`
  display: flex;
  align-items: center;
  background: none;
  border-radius: 100%;
  cursor: pointer;
  border: 2px solid ${sociaColor};
  margin-left: 10px;
`;

const FacebookShareButtonStyled = styled(FacebookShareButton)`
  ${socialStyles}
`;

const TwitterShareButtonStyled = styled(TwitterShareButton)`
  ${socialStyles}
`;

const LinkedinShareButtonStyled = styled(LinkedinShareButton)`
  ${socialStyles}
`;

const RedditShareButtonStyled = styled(RedditShareButton)`
  ${socialStyles}
`;

export const PostHeader = ({
  title,
  quote,
  quotebackground,
  imageLink,
  readingTime,
  className,
  date,
  pageUrl,
  tags = []
}: IPostHeaderProps) => {
  const { site }: IPageQuery = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  const theme = useTheme();
  const backgroundColor = socialBackgroundColor({ theme });
  const fillColor = sociaColor({ theme });

  return (
    <BottomLineContainer className={className}>
      <HeadingStyled size={EHeadingSizes.Large}>{title}</HeadingStyled>
      <FeaturedImage
        quote={quote}
        src={imageLink}
        alt={title}
        quotebackground={quotebackground}
      />
      <PostLinkFooterStyled>
        <TagsFooterStyled>
          {tags &&
            tags.map((tag, index) => (
              <FeaturedTagLink
                key={`${title}-${tag.name}-${index}`}
                to={tag.path}
                text={tag.name}
                active
              />
            ))}
        </TagsFooterStyled>
        <DateTimeStyled size={ETextSizes.Tiny}>
          {readingTime} - {date}
        </DateTimeStyled>
        <SocialIcons>
          <FacebookShareButtonStyled
            resetButtonStyle={false}
            url={`${site.siteMetadata.siteUrl}/${pageUrl}`}
          >
            <FacebookIcon
              bgStyle={{ fill: backgroundColor }}
              iconFillColor={fillColor}
              borderRadius={100}
              size={24}
            />
          </FacebookShareButtonStyled>
          <TwitterShareButtonStyled
            resetButtonStyle={false}
            url={`${site.siteMetadata.siteUrl}/${pageUrl}`}
          >
            <TwitterIcon
              bgStyle={{ fill: backgroundColor }}
              iconFillColor={fillColor}
              borderRadius={100}
              size={24}
            />
          </TwitterShareButtonStyled>
          <LinkedinShareButtonStyled
            resetButtonStyle={false}
            url={`${site.siteMetadata.siteUrl}/${pageUrl}`}
          >
            <LinkedinIcon
              bgStyle={{ fill: backgroundColor }}
              iconFillColor={fillColor}
              borderRadius={100}
              size={24}
            />
          </LinkedinShareButtonStyled>
          <RedditShareButtonStyled
            resetButtonStyle={false}
            url={`${site.siteMetadata.siteUrl}/${pageUrl}`}
          >
            <RedditIcon
              bgStyle={{ fill: backgroundColor }}
              iconFillColor={fillColor}
              borderRadius={100}
              size={24}
            />
          </RedditShareButtonStyled>
        </SocialIcons>
      </PostLinkFooterStyled>
    </BottomLineContainer>
  );
};
