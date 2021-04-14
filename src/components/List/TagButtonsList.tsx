import React from "react";
import styled from "styled-components";

import { removeListkStyles } from "~ts/styles";
import { IStyledProps } from "~ts/typings";

import { TagButton } from "../Buttons";
import { ListTitle } from "./ListTitle";

const TagButtonsListStyled = styled.div`
  margin: 0;
`;

const TagListStyled = styled.ul`
  ${removeListkStyles}
`;

const ListItemStyled = styled.li`
  margin-bottom: 0;
`;

const TagButtonStyled = styled(TagButton)`
  padding: 0;
`;

interface ITagListProps extends IStyledProps {
  title: string;
  tags: string[];
  selected?: string;
  onTagSelect: (tag: string) => void;
  onClearTagsSelect: () => void;
}

export const TagButtonsList = ({
  className,
  tags,
  title,
  selected,
  onTagSelect,
  onClearTagsSelect
}: ITagListProps) => (
  <TagButtonsListStyled className={className}>
    <ListTitle title={title} />
    <TagListStyled>
      {tags.map((tag, index) => (
        <ListItemStyled key={`tag--${tag}-${index}`}>
          <TagButtonStyled
            text={tag}
            active={selected === tag}
            onClick={() =>
              tag === selected ? onClearTagsSelect() : onTagSelect(tag)
            }
          />
        </ListItemStyled>
      ))}
    </TagListStyled>
  </TagButtonsListStyled>
);
