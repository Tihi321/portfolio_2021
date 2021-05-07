import React from "react";

import { Boxes } from "./components/Boxes";

export type TImplementedComponents = "Boxes";

export const ReactXR = ({ name }: { name: TImplementedComponents }) => (
  <>{name === "Boxes" && <Boxes />}</>
);
