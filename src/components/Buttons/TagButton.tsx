import React from "react";
import styled from "styled-components";

import { IStyledProps } from "../../definitions/styled/styled";
import { EBreakpoints, ESide } from "../../enums";
import { tagsResponsiveFontStyles } from "../../styles";
import { tagButtonColor } from "../../themes";
import { media } from "../../utils";

interface ITagButtonProps extends IStyledProps {
  text: string;
  onClick: () => void;
}

interface ITagButtonsProps extends IStyledProps {
  tags: string[];
  onClick: (tag: string) => void;
}

const TagButtonStyled = styled.button`
  cursor: pointer;
  display: inline-block;
  position: relative;
  font-style: italic;
  background: none;
  border: none;
  color: ${tagButtonColor};

  &:hover {
    top: 1px;
  }
  &::before {
    content: "#";
    font-size: 0.7em;
    padding-right: 2px;
  }

  ${tagsResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${tagsResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

export const TagButton = ({ text, onClick, className }: ITagButtonProps) => (
  <TagButtonStyled className={className} onClick={onClick}>
    {text}
  </TagButtonStyled>
);

export const TagButtons = ({ tags, onClick, className }: ITagButtonsProps) => (
  <>
    {tags.map((tag, index) => (
      <TagButton
        key={`tag--${tag}-${index}`}
        text={tag}
        className={className}
        onClick={() => onClick(tag)}
      />
    ))}
  </>
);
