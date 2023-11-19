import { graphql } from "gatsby";
import React, { useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";

import { Dog } from "~ts/components/Animations";
import { Heading, TextSize } from "~ts/components/Common";
import { Layout } from "~ts/components/Layout";
import { FeaturedHeadingLink } from "~ts/components/Links";
import { PostLink } from "~ts/components/Posts";
import {
  EBreakpoints,
  EHeadingSizes,
  EInternalLinks,
  EPostLinkSizes,
  ESide,
  ETextSizes,
} from "~ts/enums";
import { tinyFontThemeResponsiveFontStyles } from "~ts/styles";
import { TTagLink } from "~ts/typings";
import { connectTagLinks, media } from "~ts/utils";

const animateFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate(50%, 10%) scale(0.5);
  }
  20% {
    opacity: 0;
    transform: translate(50%, 10%) scale(0.5);
  }

  90% {
    opacity: 1;
    transform: translate(0) scale(1);
  }

  100% {
    opacity: 1;
    transform: translate(0) scale(1);
  }
`;

const HomeContainerStyled = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr;
  height: 100%;
  align-content: baseline;

  ${media(EBreakpoints.TABLET, ESide.UP)} {
    grid-gap: 20px 40px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-content: space-around;
  }
`;

const TitleStyled = styled(TextSize)`
  line-height: 1.4;
  ${media(EBreakpoints.TABLET, ESide.UP)} {
    grid-column: 1 / span 4;
  }
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    grid-column: 1 / span 3;
  }
`;

const WelcomeAnimationStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${media(EBreakpoints.TABLET, ESide.UP)} {
    grid-column: 1 / span 4;
  }
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    grid-column: 4 / span 1;
  }
`;

const DogContainerStyled = styled(({ children, ...props }) => <div {...props}>{children}</div>)`
  position: relative;
  opacity: 0;
  transform: translateX(50%);
  animation: ${animateFromLeft} 3s ease-out;
  animation-fill-mode: forwards;
  &::after {
    content: "Pet me";
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    pointer-events: none;
    ${tinyFontThemeResponsiveFontStyles(EBreakpoints.MOBILE)};
    opacity: ${(props) => (props.stop === "true" ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
  }
`;

const HomeLinksContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  ${media(EBreakpoints.TABLET, ESide.UP)} {
    grid-column: 1 / span 4;
    flex-direction: row;
  }
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    flex-direction: column;
    grid-column: 4 / span 1;
  }
`;

const FeaturedPostsContainerStyled = styled.div`
  ${media(EBreakpoints.TABLET, ESide.UP)} {
    grid-column: 1 / span 4;
  }
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    grid-column: 1 / span 2;
  }
`;

type TPostData = {
  fields: {
    path: string;
    readingTime: {
      text: string;
    };
  };
  frontmatter: {
    title: string;
    tags: string[];
  };
};

type TSiteMetaWithBlog = {
  site: {
    siteMetadata: {
      intro: string;
    };
  };
  featured: {
    posts: TPostData[];
  };
  recent: {
    posts: TPostData[];
  };
};

interface IHomePageProps {
  data: TSiteMetaWithBlog;
  pageContext: {
    tags: TTagLink[];
  };
}

const HomePage = ({ data, pageContext }: IHomePageProps) => {
  const [stopDogAnimation, setStopDogAnimation] = useState(false);

  const onDogStopWalking = () => {
    setStopDogAnimation(true);
  };

  const posts = useMemo(
    () => [...data.featured.posts, ...data.recent.posts].slice(0, 3),
    [data.featured.posts, data.recent.posts]
  );

  return (
    <Layout title="Home">
      <HomeContainerStyled>
        <TitleStyled size={ETextSizes.Huge}>{data.site.siteMetadata.intro}</TitleStyled>
        <WelcomeAnimationStyled>
          <DogContainerStyled stop={`${stopDogAnimation}`} onAnimationEnd={onDogStopWalking}>
            <Dog stop={stopDogAnimation} />
          </DogContainerStyled>
        </WelcomeAnimationStyled>
        <FeaturedPostsContainerStyled>
          <Heading size={EHeadingSizes.Regular}>Featured Posts</Heading>
          {posts.map((post) => (
            <PostLink
              key={post.frontmatter.title}
              readingTime={post.fields.readingTime.text}
              text={post.frontmatter.title}
              to={post.fields.path}
              size={EPostLinkSizes.Small}
              tags={connectTagLinks(pageContext.tags)(post.frontmatter.tags)}
            />
          ))}
        </FeaturedPostsContainerStyled>
        <HomeLinksContainerStyled>
          <FeaturedHeadingLink text="Blog" to={EInternalLinks.BLOG} />
          <FeaturedHeadingLink text="Works" to={EInternalLinks.WORKS} />
        </HomeLinksContainerStyled>
      </HomeContainerStyled>
    </Layout>
  );
};

export const query = graphql`
  query pageCProjectsPersonalportfolio2021SrctemplatesHomeTsx3175230070 {
    site {
      siteMetadata {
        intro
      }
    }
    featured: allMdx(
      filter: { frontmatter: { featured: { eq: true }, publish: { eq: true } } }
      limit: 3
      sort: { frontmatter: { date: DESC } }
    ) {
      posts: nodes {
        fields {
          path
          readingTime {
            text
          }
        }
        frontmatter {
          title
          tags
        }
      }
    }
    recent: allMdx(
      filter: { frontmatter: { featured: { eq: false }, publish: { eq: true } } }
      limit: 3
      sort: { frontmatter: { date: DESC } }
    ) {
      posts: nodes {
        fields {
          path
          readingTime {
            text
          }
        }
        frontmatter {
          title
          tags
        }
      }
    }
  }
`;

export default HomePage;
