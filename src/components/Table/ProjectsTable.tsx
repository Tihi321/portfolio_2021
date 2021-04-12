import React from "react";
import styled from "styled-components";

import { EProjectFields, TProject } from "../../projects";
import { TagButton } from "../Buttons";
import { ETextSizes, TextSize } from "../Common";
import { Link } from "../Links";
import { BodyRow } from "./BodyRow";
import { HeaderCell } from "./HeaderCell";
import { HeaderRow } from "./HeaderRow";
import { EmptyRowCell, RowCell } from "./RowCell";

export enum EProjectsTableType {
  Regular = "regular",
  Compact = "compact"
}

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
  type?: EProjectsTableType;
}

export const ProjectsTable = ({
  onTagSelect,
  onTechSelect,
  projects,
  type = EProjectsTableType.Regular
}: IProjectsTableProps) => (
  <TableStyled>
    <TableHeadStyled>
      <HeaderRow>
        {Object.values(EProjectFields).map(value => (
          <HeaderCell
            key={value}
            text={value}
            size={
              type === EProjectsTableType.Regular
                ? ETextSizes.Medium
                : ETextSizes.Regular
            }
          />
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
          {Object.values(EProjectFields).map((value, cellIndex) => {
            if (project[value] !== undefined) {
              switch (value) {
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
                      <TextSize
                        size={
                          type === EProjectsTableType.Regular
                            ? ETextSizes.Regular
                            : ETextSizes.Small
                        }
                      >
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
