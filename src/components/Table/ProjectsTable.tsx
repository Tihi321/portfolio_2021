import React from "react";
import styled from "styled-components";

import { EProjectFields, TProject } from "../../projects";
import { TagButton } from "../Buttons/TagButton";
import { ETextSizes, TextSize } from "../Common/TextSize";
import { Link } from "../Links/Link";
import { BodyRow } from "./BodyRow";
import { HeaderCell } from "./HeaderCell";
import { HeaderRow } from "./HeaderRow";
import { EmptyRowCell, RowCell } from "./RowCell";

const TableStyled = styled.table`
  padding: 2px 0;
`;

const TableHeadStyled = styled.thead`
  padding: 2px 0;
`;

const TableBodyStyled = styled.tbody`
  padding: 2px 0;
`;

interface IProjectsTableProps {
  onTagSelect: (tag: string) => void;
  onTechSelect: (tech: string) => void;
  projects: TProject[];
}

export const ProjectsTable = ({
  onTagSelect,
  onTechSelect,
  projects
}: IProjectsTableProps) => (
  <TableStyled>
    <TableHeadStyled>
      <HeaderRow>
        {Object.keys(EProjectFields).map(key => (
          <HeaderCell key={key} text={EProjectFields[key]} />
        ))}
      </HeaderRow>
    </TableHeadStyled>
    <TableBodyStyled>
      {projects.map((project, rowIndex) => (
        <BodyRow
          key={`row--${EProjectFields.Name}-${
            project[EProjectFields.Name]
          }-${rowIndex}}`}
        >
          {Object.keys(EProjectFields).map((key, cellIndex) => {
            if (project[EProjectFields[key]] !== undefined) {
              switch (EProjectFields[key]) {
                case EProjectFields.Tags:
                  return (
                    <RowCell
                      key={`cell--${EProjectFields.Tags}-${project[
                        EProjectFields.Tags
                      ].join("-")}-${rowIndex}-${cellIndex}}`}
                    >
                      {project[EProjectFields.Tags].map((tag, index) => (
                        <TagButton
                          key={`tag--${tag}-${index}`}
                          text={tag}
                          onClick={() => onTagSelect(tag)}
                        />
                      ))}
                    </RowCell>
                  );
                case EProjectFields.Type:
                  return (
                    <RowCell
                      key={`cell--${EProjectFields.Type}-${
                        project[EProjectFields.Type]
                      }-${rowIndex}-${cellIndex}}`}
                    >
                      <TextSize size={ETextSizes.Small}>
                        {project[EProjectFields.Type]}
                      </TextSize>
                    </RowCell>
                  );
                case EProjectFields.Techonolgies:
                  return (
                    <RowCell
                      key={`cell--${EProjectFields.Techonolgies}-${project[
                        EProjectFields.Techonolgies
                      ].join("-")}-${rowIndex}-${cellIndex}}`}
                    >
                      {project[EProjectFields.Techonolgies].map(
                        (tech, index) => (
                          <TagButton
                            key={`tech--${tech}-${index}`}
                            text={tech}
                            onClick={() => onTechSelect(tech)}
                          />
                        )
                      )}
                    </RowCell>
                  );
                case EProjectFields.Repository:
                  return (
                    <RowCell
                      key={`cell--${EProjectFields.Repository}-${
                        project[EProjectFields.Repository].name
                      }-${rowIndex}-${cellIndex}}`}
                    >
                      <Link
                        to={project[EProjectFields.Repository].link}
                        size={ETextSizes.Small}
                      >
                        {project[EProjectFields.Repository].name}
                      </Link>
                    </RowCell>
                  );
                case EProjectFields.Showcase:
                  return (
                    <RowCell
                      key={`cell--${EProjectFields.Showcase}-${
                        project[EProjectFields.Showcase].name
                      }-${rowIndex}-${cellIndex}}`}
                    >
                      <Link
                        to={project[EProjectFields.Showcase].link}
                        size={ETextSizes.Small}
                      >
                        {project[EProjectFields.Showcase].name}
                      </Link>
                    </RowCell>
                  );

                default:
                  return (
                    <RowCell
                      key={`cell--${EProjectFields.Name}-${
                        project[EProjectFields.Name]
                      }-${rowIndex}-${cellIndex}}`}
                    >
                      <TextSize size={ETextSizes.Regular}>
                        {project[EProjectFields.Name]}
                      </TextSize>
                    </RowCell>
                  );
              }
            }

            return (
              <EmptyRowCell
                key={`empty-cell--${EProjectFields.Name}-${
                  project[EProjectFields.Name]
                }-${rowIndex}-${cellIndex}}`}
              />
            );
          })}
        </BodyRow>
      ))}
    </TableBodyStyled>
  </TableStyled>
);
