import React from "react";
import styled from "styled-components";

import { removeListkStyles, resetButtonStyles } from "../../styles";
import { textColor } from "../../themes";
import { TagButton } from "../Buttons/TagButton";
import { ETextSizes, TextSize } from "../Common/TextSize";
import { ListTitle } from "./ListTitle";

const TagButtonsListStyled = styled.div`
  margin: 0;
`;

const TagListStyled = styled.ul`
  ${removeListkStyles}
`;

const ListItemStyled = styled.li`
  margin-bottom: 5px;
`;

const TagButtonStyled = styled(TagButton)`
  padding: 0;
`;

const ClearAllButtonTextStyled = styled(TextSize)`
  text-transform: capitalize;
  font-style: italic;
  font-weight: 700;
`;

const ClearAllButtonStyled = styled.button`
  ${resetButtonStyles}
  color: ${textColor};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

interface ITagListProps {
  title: string;
  tags: string[];
  selected?: string;
  onTagSelect: (tag: string) => void;
  onClearTagsSelect: () => void;
}

export const TagButtonsList = ({
  tags,
  title,
  selected,
  onTagSelect,
  onClearTagsSelect
}: ITagListProps) => (
  <TagButtonsListStyled>
    <ListTitle title={title} />
    <TagListStyled>
      {tags.map((tag, index) => (
        <ListItemStyled key={`tag--${tag}-${index}`}>
          <TagButtonStyled
            text={tag}
            active={selected === tag}
            onClick={() => onTagSelect(tag)}
          />
        </ListItemStyled>
      ))}
      <ListItemStyled>
        <ClearAllButtonStyled onClick={onClearTagsSelect}>
          <ClearAllButtonTextStyled size={ETextSizes.Tiny}>
            Clear All {title}
          </ClearAllButtonTextStyled>
        </ClearAllButtonStyled>
      </ListItemStyled>
    </TagListStyled>
  </TagButtonsListStyled>
);
