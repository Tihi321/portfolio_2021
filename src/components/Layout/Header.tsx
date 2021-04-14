import Logo from "@images/logo.inline.svg";
import React from "react";
import styled from "styled-components";

import { EBreakpoints, InternalLinks } from "@enums";
import { useMediaQuery } from "@hooks";
import { getTheme, switchTheme, useSelector, useStore } from "@store";
import { logoBackgroundColor, logoForegroundColor } from "@themes";
import { media } from "@utils";
import { FeaturedButton, ETextSizes, InternalLink } from "@components";

const LogoStyled = styled(Logo)`
  width: 126px;
  height: 130px;
  --logo-background-color: ${logoBackgroundColor};
  --logo-text-color: ${logoForegroundColor};
`;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;

  ${media(EBreakpoints.TABLET)} {
    padding-bottom: 80px;
    justify-content: space-between;
  }
`;

const HeaderLinksGroupStyled = styled.div`
  display: flex;
  height: fit-content;
  align-items: center;
`;

const BlogLinkStyled = styled(InternalLink)`
  margin-right: 20px;
`;

const ThemeButtonStyled = styled(FeaturedButton)`
  text-transform: capitalize;
`;

export const Header = () => {
  const theme = useSelector(getTheme);
  const { dispatch } = useStore();
  const isTablet = useMediaQuery(EBreakpoints.TABLET);

  return (
    <HeaderStyled>
      <InternalLink to={InternalLinks.HOME}>
        <LogoStyled />
      </InternalLink>
      {isTablet && (
        <HeaderLinksGroupStyled>
          <BlogLinkStyled size={ETextSizes.Medium} to={InternalLinks.BLOG}>
            Blog
          </BlogLinkStyled>
          <ThemeButtonStyled onClick={() => dispatch(switchTheme())}>
            {theme}
          </ThemeButtonStyled>
        </HeaderLinksGroupStyled>
      )}
    </HeaderStyled>
  );
};
