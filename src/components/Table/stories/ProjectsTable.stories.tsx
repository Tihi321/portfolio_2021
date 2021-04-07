import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";

import { ProjectsTable as ProjectsTableComponent } from "../ProjectsTable";

export const ProjectsTable = () => (
  <ProjectsTableComponent
    onTagClick={action("onTagClick - Projects Table")}
    onTechClick={action("onTechClick - Projects Table")}
  />
);
const meta = {
  title: "Components/Table"
};

export default meta as Meta;
