import React from "react";
import styled from "styled-components";

import { rowBorderColor } from "~ts/themes";
import { IContainerProps, IStyledProps } from "~ts/typings";

import { ProjectCell } from "./ProjectCell";

const ProjectRowStyled = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${rowBorderColor};
`;

interface IListTitleProps extends IStyledProps, IContainerProps {
  title: string;
}

export const ProjectRow = ({ title, className, children }: IListTitleProps) => (
  <ProjectRowStyled className={className}>
    <ProjectCell featured>{title}:</ProjectCell>
    {children}
  </ProjectRowStyled>
);
