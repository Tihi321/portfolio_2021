import React, { useMemo } from "react";
import { useImages } from "src/hooks";

import { TFiles } from "~ts/typings";

interface IFilesProps {
  render: (props: TFiles) => React.ComponentType<any>;
  name?: string;
}

export const Images = ({ render, name }: IFilesProps) => {
  const files = useImages(name);
  const Component = useMemo(() => render(files), [render]);

  return <Component />;
};
