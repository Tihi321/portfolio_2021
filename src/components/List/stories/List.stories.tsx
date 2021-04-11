import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { PROJECTS } from "../../../projects";
import { ProjectList as ProjectListComponent } from "../ProjectList";
import { ProjectsList as ProjectsListComponent } from "../ProjectsList";

export const ProjectList = () => {
  const index = Array.from(
    { length: PROJECTS.length },
    (initValue, indexValue) => indexValue
  );

  const selected = select("Project", index, index[0], "OPTIONS");

  return (
    <ProjectListComponent
      project={PROJECTS[selected]}
      onClose={action("onClose - Projects List")}
    />
  );
};

export const ProjectsList = () => <ProjectsListComponent projects={PROJECTS} />;

const meta = {
  title: "Components/List"
};

export default meta as Meta;
