import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { PROJECTS } from "@projects";
import {
  EProjectsTableType,
  ProjectsTable as ProjectsTableComponent
} from "../ProjectsTable";

export const ProjectsTable = () => {
  const types = [EProjectsTableType.Regular, EProjectsTableType.Compact];

  const tableType = select("Size", types, types[0], "OPTIONS");

  return (
    <ProjectsTableComponent
      type={tableType}
      onTagSelect={action("onTagSelect - Projects Table")}
      onTechSelect={action("onTechSelect - Projects Table")}
      projects={PROJECTS}
    />
  );
};
const meta = {
  title: "Components/Table"
};

export default meta as Meta;
