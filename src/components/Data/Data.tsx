import React, { useMemo } from "react";

import data from "~ts/data";

interface IDataProps {
  render: (props: any) => React.ComponentType<any>;
  name?: string;
}

export const Data = ({ render, name }: IDataProps) => {
  const files = data as Record<string, any>;
  const Component = useMemo(() => render({
    files: files,
    file: name && files[name]
  }), [render]);

  return <Component />;
};
