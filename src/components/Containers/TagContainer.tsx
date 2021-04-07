import React from "react";
import styled from "styled-components";

import { IStyledProps } from "../../definitions/styled/styled";
import { featuredTagColor } from "../../themes";

export enum ETagContainerType {
  Primary = "primary",
  Secondary = "secondary"
}

interface IContainerProps extends IStyledProps {
  children: React.ReactNode;
  type?: ETagContainerType.Primary | ETagContainerType.Secondary;
}

const TagContainerStyled = styled(({ children, ...props }) => (
  <span {...props}>{children}</span>
))`
  padding: 2px 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${props =>
    props.type === ETagContainerType.Primary &&
    `background-color: ${featuredTagColor(props)}`}
  ${props =>
    props.type === ETagContainerType.Secondary &&
    `border: 1px solid ${featuredTagColor(props)}`}
`;

export const TagContainer = ({
  children,
  className,
  type = ETagContainerType.Primary
}: IContainerProps) => (
  <TagContainerStyled type={type} className={className}>
    {children}
  </TagContainerStyled>
);
