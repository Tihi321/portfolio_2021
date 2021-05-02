import { graphql, useStaticQuery } from "gatsby";
import { useMemo } from "react";
import { getNodes } from "src/utils";

import { IFilesQuery, IUseFiles } from "~ts/typings";

export const useImages: IUseFiles = name => {
  const data: IFilesQuery = useStaticQuery(graphql`
    {
      files: allFile(
        filter: {
          extension: { ne: "mdx" }
          absolutePath: { regex: "/content/images/" }
        }
      ) {
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
