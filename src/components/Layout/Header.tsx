import React from "react";
import styled from "styled-components";

import { EBreakpoints, InternalLinks } from "../../enums";
import { useMediaQuery } from "../../hooks";
import { getTheme, switchTheme, useSelector, useStore } from "../../store";
import { media } from "../../utils";
import { FeaturedButton } from "../Buttons";
import { ETextSizes } from "../Common";
import { Logo } from "../Icons";
import { InternalLink } from "../Links";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;

  ${media(EBreakpoints.TABLET)} {
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
        <Logo />
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
