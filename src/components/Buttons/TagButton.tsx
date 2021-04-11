import React from "react";
import styled from "styled-components";

import { IStyledProps } from "../../definitions";
import { resetButtonStyles } from "../../styles";
import { ETagType, TagText } from "../Common";
import { ETagContainerType, TagContainer } from "../Containers";

interface ITagButtonProps extends IStyledProps {
  text: string;
  onClick: () => void;
  active?: boolean;
}

const TagButtonStyled = styled.button`
  ${resetButtonStyles}
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const TagButton = ({
  text,
  onClick,
  className,
  active = false
}: ITagButtonProps) => (
  <TagButtonStyled onClick={onClick} className={className}>
    <TagText text={text} type={active ? ETagType.Tertiary : ETagType.Primary} />
  </TagButtonStyled>
);

export const FeaturedTagButton = ({
  text,
  onClick,
  className,
  active = false
}: ITagButtonProps) => (
  <TagButtonStyled onClick={onClick}>
    <TagContainer
      className={className}
      type={active && ETagContainerType.Secondary}
    >
      <TagText
        text={text}
        type={active ? ETagType.Tertiary : ETagType.Secondary}
      />
    </TagContainer>
  </TagButtonStyled>
);
