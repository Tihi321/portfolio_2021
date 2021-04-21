import styled from "styled-components";

import { projectTitleBackgroundColor } from "~ts/themes";

export const ProjectTitle = styled.div`
  padding: 10px;
  width: 100%;
  text-transform: capitalize;
  text-align: center;
  background-color: ${projectTitleBackgroundColor};
`;
