import React from "react";
import styled from "styled-components";

import { EProjectFields, PROJECTS } from "../../projects";
import { TagButtons } from "../Buttons/TagButton";
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
  onTagClick: (tag: string) => void;
  onTechClick: (tech: string) => void;
}

export const ProjectsTable = ({
  onTagClick,
  onTechClick
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
      {PROJECTS.map((project, rowIndex) => (
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
                      <TagButtons
                        tags={project[EProjectFields.Tags]}
                        onClick={tag => onTagClick(tag)}
                      />
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
                      <TagButtons
                        tags={project[EProjectFields.Techonolgies]}
                        onClick={tech => onTechClick(tech)}
                      />
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
                        text={project[EProjectFields.Repository].name}
                        to={project[EProjectFields.Repository].link}
                        size={ETextSizes.Small}
                      />
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
                        text={project[EProjectFields.Showcase].name}
                        to={project[EProjectFields.Showcase].link}
                        size={ETextSizes.Small}
                      />
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
