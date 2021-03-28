export interface ISocial {
  email: string;
  github: string;
  linkedin: string;
}

export interface IAuthor {
  name: string;
  summary: string;
}

export interface IMetadata {
  title: string;
  description: string;
  siteUrl: string;
}

export interface ISetting {
  pathPrefix: string;
  postsPerPage: number;
  isKatex: boolean;
}

export interface ISiteMetadata extends IMetadata, ISetting {
  author: IAuthor;
  social: ISocial;
}

export interface IPlugin {
  resolve: String;
  options: Object;
  __key?: string;
}

export type Plugins = Array<string | IPlugin>;
