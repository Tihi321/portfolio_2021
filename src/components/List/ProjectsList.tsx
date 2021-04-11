import React, { useState } from "react";
import styled from "styled-components";

import { EZIndex } from "../../enums";
import { EProjectFields, TProject } from "../../projects";
import { WideButton } from "../Buttons";
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
    setSelectedProject(
      projects.find(project => project[EProjectFields.Name] === name)
    );
  };

  const handleOnClose = () => setSelectedProject(undefined);

  return (
    <ProjectsListStyled>
      {selectedProject ? (
        <ProjectListStyled project={selectedProject} onClose={handleOnClose} />
      ) : (
        projects.map((project, index) => (
          <ProjectButtonStyled
            key={`project-${project[EProjectFields.Name]}-${index}`}
            text={project[EProjectFields.Name]}
            onClick={() => handleSelectedProject(project[EProjectFields.Name])}
          />
        ))
      )}
    </ProjectsListStyled>
  );
};
