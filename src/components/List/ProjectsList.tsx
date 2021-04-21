import React from "react";
import styled from "styled-components";

import { FeaturedTagButton } from "~ts/components/Buttons";
import { TextSize } from "~ts/components/Common";
import { Link } from "~ts/components/Links";
import { EProjectFields, ETextSizes } from "~ts/enums";
import { projectBorderColor } from "~ts/themes";
import { TProject } from "~ts/typings";

import { ProjectCell, ProjectEmptyCell } from "./ProjectCell";
import { ProjectRow } from "./ProjectRow";
import { ProjectTitle } from "./ProjectTitle";

const ListStyled = styled.div`
  padding: 5px 0;
`;

const ProjectContainerStyled = styled.div`
  padding-bottom: 10px;
  border-top: 5px solid ${projectBorderColor};
`;

interface IProjectsTableProps {
  onTagSelect: (tag: string) => void;
  onTechSelect: (tech: string) => void;
  projects: TProject[];
}

export const ProjectsList = ({
  onTagSelect,
  onTechSelect,
  projects
}: IProjectsTableProps) => (
  <ListStyled>
    {projects.map((project, rowIndex) => (
      <ProjectContainerStyled
        key={`row--${EProjectFields.Name}-${
          project[EProjectFields.Name]
        }-${rowIndex}}`}
      >
        {Object.values(EProjectFields).map((value, cellIndex) => {
          if (project[value] !== undefined) {
            switch (value) {
              case EProjectFields.Tags:
                return (
                  <ProjectRow
                    key={`cell--${EProjectFields.Tags}-${project[
                      EProjectFields.Tags
                    ].join("-")}-${rowIndex}-${cellIndex}}`}
                    title={value}
                  >
                    {project[EProjectFields.Tags].map((tag, index) => (
                      <ProjectCell key={`tag--${tag}-${index}`}>
                        <FeaturedTagButton
                          text={tag}
                          onClick={() => onTagSelect(tag)}
                        />
                      </ProjectCell>
                    ))}
                  </ProjectRow>
                );
              case EProjectFields.Type:
                return (
                  <ProjectRow
                    key={`cell--${EProjectFields.Type}-${
                      project[EProjectFields.Type]
                    }-${rowIndex}-${cellIndex}}`}
                    title={value}
                  >
                    <ProjectCell>
                      <TextSize size={ETextSizes.Small}>
                        {project[EProjectFields.Type]}
                      </TextSize>
                    </ProjectCell>
                  </ProjectRow>
                );
              case EProjectFields.Techonolgies:
                return (
                  <ProjectRow
                    key={`cell--${EProjectFields.Techonolgies}-${project[
                      EProjectFields.Techonolgies
                    ].join("-")}-${rowIndex}-${cellIndex}}`}
                    title={value}
                  >
                    {project[EProjectFields.Techonolgies].map((tech, index) => (
                      <ProjectCell key={`tech--${tech}-${index}`}>
                        <FeaturedTagButton
                          text={tech}
                          onClick={() => onTechSelect(tech)}
                        />
                      </ProjectCell>
                    ))}
                  </ProjectRow>
                );
              case EProjectFields.Repository:
                return (
                  <ProjectRow
                    key={`cell--${EProjectFields.Repository}-${
                      project[EProjectFields.Repository]?.name
                    }-${rowIndex}-${cellIndex}}`}
                    title={value}
                  >
                    <ProjectCell>
                      <Link
                        to={project[EProjectFields.Repository]?.link || ""}
                        size={ETextSizes.Small}
                      >
                        {project[EProjectFields.Repository]?.name}
                      </Link>
                    </ProjectCell>
                  </ProjectRow>
                );
              case EProjectFields.Showcase:
                return (
                  <ProjectRow
                    key={`cell--${EProjectFields.Showcase}-${
                      project[EProjectFields.Showcase]?.name
                    }-${rowIndex}-${cellIndex}}`}
                    title={value}
                  >
                    <ProjectCell>
                      <Link
                        to={project[EProjectFields.Showcase]?.link || ""}
                        size={ETextSizes.Small}
                      >
                        {project[EProjectFields.Showcase]?.name}
                      </Link>
                    </ProjectCell>
                  </ProjectRow>
                );

              default:
                return (
                  <ProjectTitle
                    key={`cell--${EProjectFields.Name}-${
                      project[EProjectFields.Name]
                    }-${rowIndex}-${cellIndex}}`}
                  >
                    <TextSize size={ETextSizes.Regular}>
                      {project[EProjectFields.Name]}
                    </TextSize>
                  </ProjectTitle>
                );
            }
          }

          return (
            <ProjectEmptyCell
              key={`empty-cell--${EProjectFields.Name}-${
                project[EProjectFields.Name]
              }-${rowIndex}-${cellIndex}}`}
            />
          );
        })}
      </ProjectContainerStyled>
    ))}
  </ListStyled>
);
