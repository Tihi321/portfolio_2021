export enum EProjectFields {
  Name = "Name",
  Type = "Type",
  Techonolgies = "Tech",
  Repository = "Repo",
  Showcase = "Showcase",
  Tags = "Tags"
}

export type TProject = {
  [EProjectFields.Name]: string;
  [EProjectFields.Type]: string;
  [EProjectFields.Techonolgies]: string[];
  [EProjectFields.Repository]?: {
    name: string;
    link: string;
  };
  [EProjectFields.Showcase]?: {
    name: string;
    link: string;
  };
  [EProjectFields.Tags]: string[];
};
