import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { HeadScript } from "~ts/components/Layout";

import { ABox } from "./components/ABox";
import { useAFrame } from "./hooks/useAFrame";
import { registerComponents, registerPrimitives } from "./utils/register";

const AFrameElementStyled = styled.div`
  width: 100%;
  height: 500px;
`;

interface INamedObject {
  name: string;
  val: object;
}
interface IAFrameSceneProps {
  sceneHtml: string;
  components?: INamedObject[];
  primitives?: INamedObject[];
}

// A react component for loading and unloading an aframe scene. The initial scene contents should
// be specified as an html string in sceneHtml. All props must be specified when the component
// mounts. Updates to props will be ignored.
//
// Optionally, aframe coponents to register for this scene can be passed as [{name, val}] arrays.
// Care is needed here to not define the same component different across scenes, since aframe
// components can't be unloaded.
export const AFrameScene = ({
  sceneHtml,
  components,
  primitives
}: IAFrameSceneProps) => {
  const aFrameElement = useRef({} as any);
  const { aFrameLoaded } = useAFrame();

  useEffect(() => {
    if (aFrameLoaded) {
      if (components) {
        registerComponents(components);
      }

      if (primitives) {
        registerPrimitives(primitives);
      }

      aFrameElement.current.insertAdjacentHTML("beforeend", sceneHtml);
    }
  }, [aFrameLoaded]);

  return (
    <>
      <HeadScript
        src="https://aframe.io/releases/1.2.0/aframe.min.js"
        type="javascript"
      />
      <AFrameElementStyled ref={aFrameElement} />
    </>
  );
};

export type TImplementedComponents = "ABox";

export const Aframe = ({ name }: { name: TImplementedComponents }) => (
  <>{name === "ABox" && <AFrameScene sceneHtml={ABox} />}</>
);
