import React, { useMemo } from "react";

import { useAssets } from "~ts/hooks";
import { TFiles } from "~ts/typings";

interface IFilesProps {
  render: (props: TFiles) => React.ComponentType<any>;
  name?: string;
}

export const Assets = ({ render, name }: IFilesProps) => {
  const files = useAssets(name);
  const Component = useMemo(() => render(files), [render]);

  return <Component />;
};
