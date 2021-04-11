import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { IStyledProps } from "../../definitions";
import { resetFontStyles, resetLinkStyles } from "../../styles";
import { ETagType, TagText } from "../Common/TagText";
import { ETagContainerType, TagContainer } from "../Containers/TagContainer";

interface ILinkProps extends IStyledProps {
  text: string;
  to: string;
  active?: boolean;
}

const LinkStyled = styled(Link)`
  ${resetFontStyles}
  ${resetLinkStyles}
`;

export const TagLink = ({
  text,
  to,
  className,
  active = false
}: ILinkProps) => (
  <LinkStyled className={className} to={to}>
    <TagText
      text={text}
      className={className}
      type={active ? ETagType.Tertiary : ETagType.Primary}
    />
  </LinkStyled>
);

export const FeaturedTagLink = ({
  text,
  to,
  className,
  active = false
}: ILinkProps) => (
  <TagContainer
    className={className}
    type={active ? ETagContainerType.Primary : ETagContainerType.Secondary}
  >
    <LinkStyled className={className} to={to}>
      <TagText
        text={text}
        className={className}
        type={active ? ETagType.Tertiary : ETagType.Secondary}
      />
    </LinkStyled>
  </TagContainer>
);
