import React, { useMemo, useState } from "react";
import styled from "styled-components";

import { TextSize } from "~ts/components/Common";
import { ColumnsContainer } from "~ts/components/Containers";
import { Layout } from "~ts/components/Layout";
import {
  ProjectsList,
  TagButtonsFeaturedList,
  TagButtonsList
} from "~ts/components/List";
import { ProjectsTable } from "~ts/components/Table";
import {
  EBreakpoints,
  EProjectFields,
  EProjectsTableType,
  ETextSizes
} from "~ts/enums";
import { useMediaQuery } from "~ts/hooks";
import { PROJECTS } from "~ts/projects";
import { resetButtonStyles } from "~ts/styles";
import { textColor } from "~ts/themes";
import { media } from "~ts/utils";

const TagsContainerTabletStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media(EBreakpoints.LAPTOP)} {
    align-items: flex-start;
  }
`;

const TagsContainerMobileStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClearAllButtonTextStyled = styled(TextSize)`
  text-transform: capitalize;
  font-style: italic;
  font-weight: 700;
`;

const TagButtonsFeaturedListStyled = styled(TagButtonsFeaturedList)`
  padding-bottom: 10px;
`;

const TagButtonsListStyled = styled(TagButtonsList)`
  padding-bottom: 10px;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    ${media(EBreakpoints.LAPTOP)} {
      flex-direction: column;
    }
  }

  li {
    margin-right: 10px;

    ${media(EBreakpoints.LAPTOP)} {
      margin-right: 0;
    }
  }

  h3 {
    text-align: center;

    ${media(EBreakpoints.LAPTOP)} {
      text-align: start;
    }
  }
`;

const ClearAllButtonStyled = styled.button`
  ${resetButtonStyles}
  color: ${textColor};
  cursor: pointer;
  &:focus {
    outline: none;
  }
  ${media(EBreakpoints.LAPTOP)} {
    margin-top: 10px;
  }
`;

const Works = () => {
  const [selectedProjects, setSelectedProjects] = useState(PROJECTS);
  const [selectedTagTech, setSelectedTagTech] = useState("");

  const tags: string[] = useMemo(
    () =>
      Array.from(
        new Set(
          PROJECTS.reduce(
            (allTags, project) => [...allTags, ...project[EProjectFields.Tags]],
            [] as string[]
          )
        )
      ),
    []
  );
  const technologies: string[] = useMemo(
    () =>
      Array.from(
        new Set(
          PROJECTS.reduce(
            (allTechs, project) => [
              ...allTechs,
              ...project[EProjectFields.Techonolgies]
            ],
            [] as string[]
          )
        )
      ),
    []
  );
  const isTablet = useMediaQuery(EBreakpoints.TABLET);
  const isLaptop = useMediaQuery(EBreakpoints.LAPTOP);

  const onTagSelect = (tag: string) => {
    setSelectedTagTech(tag);
    setSelectedProjects(
      PROJECTS.filter(project => project[EProjectFields.Tags].includes(tag))
    );
  };

  const onTechnologySelect = (tech: string) => {
    setSelectedTagTech(tech);

    setSelectedProjects(
      PROJECTS.filter(project =>
        project[EProjectFields.Techonolgies].includes(tech)
      )
    );
  };

  const onClearTagsTechSelect = () => {
    setSelectedTagTech("");
    setSelectedProjects(PROJECTS);
  };

  const tagsProps = {
    tags,
    title: "Tags",
    selected: selectedTagTech,
    onTagSelect,
    onClearTagsSelect: onClearTagsTechSelect
  };

  const techProps = {
    tags: technologies,
    title: "Technologies",
    selected: selectedTagTech,
    onTagSelect: onTechnologySelect,
    onClearTagsSelect: onClearTagsTechSelect
  };

  return (
    <Layout title="Works">
      <ColumnsContainer>
        {isTablet ? (
          <>
            <TagsContainerTabletStyled>
              <TagButtonsListStyled {...tagsProps} />
              <TagButtonsListStyled {...techProps} />
              <ClearAllButtonStyled onClick={onClearTagsTechSelect}>
                <ClearAllButtonTextStyled size={ETextSizes.Tiny}>
                  Clear All
                </ClearAllButtonTextStyled>
              </ClearAllButtonStyled>
            </TagsContainerTabletStyled>
            <ProjectsTable
              type={
                isLaptop
                  ? EProjectsTableType.Regular
                  : EProjectsTableType.Compact
              }
              projects={selectedProjects}
              onTagSelect={onTagSelect}
              onTechSelect={onTechnologySelect}
            />
          </>
        ) : (
          <>
            <TagsContainerMobileStyled>
              <TagButtonsFeaturedListStyled {...tagsProps} />
              <TagButtonsFeaturedListStyled {...techProps} />
            </TagsContainerMobileStyled>
            <ProjectsList projects={selectedProjects} />
          </>
        )}
      </ColumnsContainer>
    </Layout>
  );
};

export default Works;
