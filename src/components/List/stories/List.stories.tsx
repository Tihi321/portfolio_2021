import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React, { useState } from "react";

import { PROJECTS } from "../../../projects";
import { ProjectList as ProjectListComponent } from "../ProjectList";
import { ProjectsList as ProjectsListComponent } from "../ProjectsList";
import { TagButtonsFeaturedList as TagButtonsFeaturedListComponent } from "../TagButtonsFeaturedList";
import { TagButtonsList as TagButtonsListComponent } from "../TagButtonsList";

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

export const TagButtonsList = () => {
  const tags = ["Project", "Open Source"];
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <TagButtonsListComponent
      title="Tags"
      tags={tags}
      selected={selectedTag}
      onTagSelect={tag => setSelectedTag(tag)}
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
      onTagSelect={tag => setSelectedTag(tag)}
      onClearTagsSelect={() => setSelectedTag("")}
    />
  );
};

const meta = {
  title: "Components/List"
};

export default meta as Meta;
