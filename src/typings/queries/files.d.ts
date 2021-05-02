export type TFile = {
  publicURL: string;
  ext: string;
  name: string;
};

export type TFileNode = {
  node: TFile;
};

export type TFiles = {
  files: TFile[];
  file: TFile | undefined;
};

export interface IFilesQuery {
  files: {
    nodes: TFileNode[];
  };
}

export type IUseFiles = (
  name?: string
) => {
  files: TFile[];
  file: TFile | undefined;
};
