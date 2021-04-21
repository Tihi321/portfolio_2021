import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React, { useState } from "react";

import { PROJECTS } from "~ts/projects";

import { ProjectList as ProjectListComponent } from "../ProjectList";
import { ProjectsButtonList as ProjectsButtonListComponent } from "../ProjectsButtonList";
import { ProjectsList as ProjectsListComponent } from "../ProjectsList";
import { TagButtonsFeaturedList as TagButtonsFeaturedListComponent } from "../TagFeaturedList";
import { TagButtonsList as TagButtonsListComponent } from "../TagList";

export const ProjectsList = () => (
  <ProjectsListComponent
    onTagSelect={action("onTagSelect - Projects Table")}
    onTechSelect={action("onTechSelect - Projects Table")}
    projects={PROJECTS}
  />
);

export const ProjectList = () => {
  const index = Array.from(
    { length: PROJECTS.length },
    (_initValue, indexValue) => indexValue
  );

  const selected = select("Project", index, index[0], "OPTIONS");

  return (
    <ProjectListComponent
      project={PROJECTS[selected]}
      onClose={action("onClose - Projects List")}
    />
  );
};

export const ProjectsButtonList = () => (
  <ProjectsButtonListComponent projects={PROJECTS} />
);

export const TagButtonsList = () => {
  const tags = ["Project", "Open Source"];
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <TagButtonsListComponent
      title="Tags"
      tags={tags}
      selected={selectedTag}
      onTagSelect={(tag) => setSelectedTag(tag)}
      onClearTagsSelect={() => setSelectedTag("")}
    />
  );
};

export const TagButtonsFeaturedList = () => {
  const tags = ["typescript", "node", "javascript"];
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <TagButtonsFeaturedListComponent
      title="Tech"
      tags={tags}
      selected={selectedTag}
      onTagSelect={(tag) => setSelectedTag(tag)}
      onClearTagsSelect={() => setSelectedTag("")}
    />
  );
};

const meta = {
  title: "Components/List",
};

export default meta as Meta;
