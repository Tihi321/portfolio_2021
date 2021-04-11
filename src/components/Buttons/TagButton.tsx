import React from "react";
import styled from "styled-components";

import { IStyledProps } from "../../definitions";
import { resetButtonStyles } from "../../styles";
import { ETagType, TagText } from "../Common/TagText";
import { ETagContainerType, TagContainer } from "../Containers/TagContainer";

interface ITagButtonProps extends IStyledProps {
  text: string;
  onClick: () => void;
  active?: boolean;
}

const TagButtonStyled = styled.button`
  ${resetButtonStyles}
`;

export const TagButton = ({
  text,
  onClick,
  className,
  active = false
}: ITagButtonProps) => (
  <TagButtonStyled onClick={onClick}>
    <TagText
      text={text}
      className={className}
      type={active ? ETagType.Tertiary : ETagType.Primary}
    />
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
      type={active ? ETagContainerType.Primary : ETagContainerType.Secondary}
    >
      <TagText
        text={text}
        className={className}
        type={active ? ETagType.Tertiary : ETagType.Secondary}
      />
    </TagContainer>
  </TagButtonStyled>
);
