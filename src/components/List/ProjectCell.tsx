import React from "react";
import styled from "styled-components";

import { projectTitleBackgroundColor } from "~ts/themes";

export const ProjectCell = styled(({ children, ...props }) => (
  <div {...props}>{children}</div>
))`
  padding: 10px;
  width: ${props => (props.featured ? "70px" : "auto")};
  font-weight: ${props => (props.featured ? 700 : 400)};
  text-transform: ${props => (props.featured ? "capitalize" : "capitalize")};
  background-color: ${props =>
    props.featured ? projectTitleBackgroundColor : "transparent"};
`;

export const ProjectEmptyCell = styled.div``;
