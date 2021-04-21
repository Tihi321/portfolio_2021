import React, { useMemo, useState } from "react";
import styled from "styled-components";

import { TextSize } from "~ts/components/Common";
import { ColumnsContainer } from "~ts/components/Containers";
import { Layout } from "~ts/components/Layout";
import {
  ProjectsButtonList,
  TagButtonsFeaturedList,
  TagButtonsList
} from "~ts/components/List";
import { ProjectsList } from "~ts/components/List/ProjectsList";
import { EBreakpoints, EProjectFields, ESide, ETextSizes } from "~ts/enums";
import { useMediaQuery } from "~ts/hooks";
import { PROJECTS } from "~ts/projects";
import { resetButtonStyles } from "~ts/styles";
import { textColor } from "~ts/themes";
import { media } from "~ts/utils";

const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 20px;
`;

const TagButtonsListStyled = styled(TagButtonsList)`
  padding-bottom: 10px;
`;

const SiteTitleStyled = styled.h2`
  text-align: center;
`;

const SiteDisclaimerStyled = styled.div`
  padding-bottom: 20px;

  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    padding-bottom: 50px;
  }
`;

const TagButtonsFeaturedListStyled = styled(TagButtonsFeaturedList)`
  padding-bottom: 10px;
`;

const ClearAllButtonStyled = styled.button`
  ${resetButtonStyles}
  color: ${textColor};
  cursor: pointer;
  text-align: left;

  &:focus {
    outline: none;
  }
`;

const ClearAllButtonTextStyled = styled(TextSize)`
  text-transform: capitalize;
  font-style: italic;
  font-weight: 700;
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
      <SiteDisclaimerStyled>
        <SiteTitleStyled>About Blog</SiteTitleStyled>
        This blog is created with <a href="https://www.gatsbyjs.com/">
          Gatsby
        </a>{" "}
        static site generator. It is written in{" "}
        <a href="https://www.typescriptlang.org/">Typescript</a>. For displaying
        and developing{" "}
        <a href="https://tihi321.github.io/portfolio_2021">components</a> site
        uses <a href="https://storybook.js.org/">Storybook</a>. Tests are done
        with <a href="https://jestjs.io/">Jest Framework</a>. Source code for
        this website is publicly available on{" "}
        <a href="https://github.com/Tihi321/portfolio_2021">github</a>. For
        making static build, site uses{" "}
        <a href="https://github.com/features/actions">Github Actions</a> which
        in the end deploy the static files to{" "}
        <a href="https://www.netlify.com/">Netlify</a> to be served on the
        domain{" "}
        <a href="https://www.tihomir-selak.from.hr/">
          www.tihomir-selak.from.hr
        </a>
      </SiteDisclaimerStyled>
      <ColumnsContainer>
        {isLaptop ? (
          <TagsContainer>
            <StickyContainer>
              <TagButtonsListStyled {...tagsProps} />
              <TagButtonsListStyled {...techProps} />
              <ClearAllButtonStyled onClick={onClearTagsTechSelect}>
                <ClearAllButtonTextStyled size={ETextSizes.Tiny}>
                  Clear
                </ClearAllButtonTextStyled>
              </ClearAllButtonStyled>
            </StickyContainer>
          </TagsContainer>
        ) : (
          <TagsContainer>
            <TagButtonsFeaturedListStyled {...tagsProps} />
            <TagButtonsFeaturedListStyled {...techProps} />
          </TagsContainer>
        )}
        {isTablet ? (
          <ProjectsList
            projects={selectedProjects}
            onTagSelect={onTagSelect}
            onTechSelect={onTechnologySelect}
          />
        ) : (
          <ProjectsButtonList projects={selectedProjects} />
        )}
      </ColumnsContainer>
    </Layout>
  );
};

export default Works;
