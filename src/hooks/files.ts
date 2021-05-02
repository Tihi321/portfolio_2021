import { graphql, useStaticQuery } from "gatsby";
import { useMemo } from "react";

import { IFilesQuery, IUseFiles } from "~ts/typings";
import { getNodes } from "~ts/utils";

export const useFiles: IUseFiles = name => {
  const data: IFilesQuery = useStaticQuery(graphql`
    {
      files: allFile(filter: { extension: { ne: "mdx" } }) {
        nodes: edges {
          node {
            publicURL
            ext
            name
          }
        }
      }
    }
  `);

  const files = useMemo(() => getNodes(data.files.nodes), [data]);

  return { files, file: files.find(file => file.name === name) };
};
