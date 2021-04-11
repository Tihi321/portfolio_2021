import React, { useState } from "react";
import styled from "styled-components";

import { EZIndex } from "../../enums";
import { TProject } from "../../projects";
import { WideButton } from "../Buttons/WideButton";
import { ProjectList } from "./ProjectList";

const ProjectsListStyled = styled.div`
  padding: 10px 0;
`;

const ProjectListStyled = styled(ProjectList)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  z-index: ${EZIndex.PROJECT_LIST};
`;

const ProjectButtonStyled = styled(WideButton)`
  margin-bottom: 15px;
`;

interface IProjectsListProps {
  projects: TProject[];
}

export const ProjectsList = ({ projects }: IProjectsListProps) => {
  const [selectedProject, setSelectedProject] = useState(undefined);

  const handleSelectedProject = (name: string) => {
    setSelectedProject(projects.find(project => project.name === name));
  };

  const handleOnClose = () => setSelectedProject(undefined);

  return (
    <ProjectsListStyled>
      {selectedProject ? (
        <ProjectListStyled project={selectedProject} onClose={handleOnClose} />
      ) : (
        projects.map(({ name }, index) => (
          <ProjectButtonStyled
            key={`project-${name}-${index}`}
            text={name}
            onClick={() => handleSelectedProject(name)}
          />
        ))
      )}
    </ProjectsListStyled>
  );
};
