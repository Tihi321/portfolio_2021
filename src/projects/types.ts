export enum EProjectFields {
  Name = "name",
  Type = "type",
  Techonolgies = "tech",
  Repository = "repo",
  Showcase = "showcase",
  Tags = "tags"
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
