import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

import {
  ContactAddresses,
  EBreakpoints,
  ESide,
  EZIndex,
  InternalLinks
} from "../../enums";
import { useMediaQuery } from "../../hooks";
import { getTheme, switchTheme, useSelector, useStore } from "../../store";
import { media } from "../../utils";
import { EFeaturedButtonType, FeaturedButton } from "../Buttons/FeaturedButton";
import { ETextSizes, TextSize } from "../Common/TextSize";
import { InternalLink, Link } from "../Links/Link";

const FooterStyled = styled.footer`
  display: flex;
  box-sizing: content-box;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 50px;

  ${media(EBreakpoints.TABLET)} {
    padding-bottom: 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterLinksGroupStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterAuthorStyled = styled.div`
  text-align: center;
  margin-top: 20px;
  ${media(EBreakpoints.TABLET)} {
    margin-top: 0;
  }
`;

const FooterLinkStyled = styled(Link)`
  margin-right: 10px;
`;

const ThemeButtonContainerStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  z-index: ${EZIndex.FOOTER_THEME_BUTTON};
`;

const ThemeButtonTextStyled = styled(TextSize)`
  text-transform: capitalize;
`;

interface ISiteQuery {
  site: {
    siteMetadata: {
      author: {
        name: string;
      };
    };
  };
}

export const Footer = () => {
  const { site }: ISiteQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
            }
          }
        }
      }
    `
  );

  const theme = useSelector(getTheme);
  const { dispatch } = useStore();

  const isMobile = useMediaQuery(EBreakpoints.MOBILE, ESide.MIDDLE);

  return (
    <FooterStyled>
      <FooterLinksGroupStyled>
        <FooterLinkStyled to={ContactAddresses.MAIL}>Mail</FooterLinkStyled>
        <FooterLinkStyled to={ContactAddresses.GITHUB}>Github</FooterLinkStyled>
        <FooterLinkStyled to={ContactAddresses.LINKEDIN}>
          Linkedin
        </FooterLinkStyled>
        {isMobile && <InternalLink to={InternalLinks.BLOG}>Blog</InternalLink>}
      </FooterLinksGroupStyled>
      <FooterAuthorStyled>
        © {new Date().getFullYear()} {site.siteMetadata.author.name}
      </FooterAuthorStyled>
      {isMobile && (
        <ThemeButtonContainerStyled>
          <FeaturedButton
            type={EFeaturedButtonType.Wide}
            onClick={() => dispatch(switchTheme())}
          >
            <ThemeButtonTextStyled size={ETextSizes.Medium}>
              {theme}
            </ThemeButtonTextStyled>
          </FeaturedButton>
        </ThemeButtonContainerStyled>
      )}
    </FooterStyled>
  );
};
