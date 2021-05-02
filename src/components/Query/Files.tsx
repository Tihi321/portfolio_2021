import React, { useMemo } from "react";
import { useFiles } from "src/hooks";

import { TFiles } from "~ts/typings";

interface IFilesProps {
  render: (props: TFiles) => React.ComponentType<any>;
  name?: string;
}

export const Files = ({ render, name }: IFilesProps) => {
  const files = useFiles(name);
  const Component = useMemo(() => render(files), [render]);

  return <Component />;
};
