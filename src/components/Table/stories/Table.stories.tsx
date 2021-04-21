import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";

import { PROJECTS } from "~ts/projects";

import { ProjectsTable as ProjectsTableComponent } from "../ProjectsTable";

export const ProjectsTable = () => (
  <ProjectsTableComponent
    onTagSelect={action("onTagSelect - Projects Table")}
    onTechSelect={action("onTechSelect - Projects Table")}
    projects={PROJECTS}
  />
);
const meta = {
  title: "Components/Table"
};

export default meta as Meta;
