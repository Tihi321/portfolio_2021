import React from "react";
import styled from "styled-components";

import { removeListkStyles } from "../../styles";
import { FeaturedTagButton } from "../Buttons/TagButton";
import { ListTitle } from "./ListTitle";

const TagButtonsFeaturedListStyled = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TagListStyled = styled.ul`
  ${removeListkStyles}
  display: flex;
  flex-direction: row;
`;

const ListItemStyled = styled.li`
  margin: 0;
`;

const TagButtonStyled = styled(FeaturedTagButton)`
  margin: 0;
`;

interface ITagListProps {
  title: string;
  tags: string[];
  selected?: string;
  onTagSelect: (tag: string) => void;
  onClearTagsSelect: () => void;
}

export const TagButtonsFeaturedList = ({
  tags,
  title,
  selected,
  onTagSelect,
  onClearTagsSelect
}: ITagListProps) => (
  <TagButtonsFeaturedListStyled>
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
  </TagButtonsFeaturedListStyled>
);
