import React from "react";
import styled from "styled-components";

import { removeListkStyles } from "~ts/styles";
import {
  ITagButtonsListProps,
  ITagLinkListProps,
  ITagListProps
} from "~ts/typings";

import { TagButton } from "../Buttons";
import { TagLink } from "../Links";
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

export const TagList = ({ className, title, children }: ITagListProps) => (
  <TagButtonsListStyled className={className}>
    <ListTitle title={title} />
    <TagListStyled>{children}</TagListStyled>
  </TagButtonsListStyled>
);

export const TagLinkList = ({
  className,
  tags,
  title,
  selected
}: ITagLinkListProps) => (
  <TagList className={className} title={title}>
    {tags.map((tag, index) => (
      <ListItemStyled key={`tag--${tag.name}-${index}`}>
        <TagLink text={tag.name} active={selected === tag.name} to={tag.path} />
      </ListItemStyled>
    ))}
  </TagList>
);

export const TagButtonsList = ({
  className,
  tags,
  title,
  selected,
  onTagSelect,
  onClearTagsSelect
}: ITagButtonsListProps) => (
  <TagList className={className} title={title}>
    {tags.map((tag, index) => (
      <ListItemStyled key={`tag--${tag}-${index}`}>
        <TagButtonStyled
          text={tag}
          active={selected === tag}
          onClick={() =>
            selected === tag ? onClearTagsSelect() : onTagSelect(tag)
          }
        />
      </ListItemStyled>
    ))}
  </TagList>
);
