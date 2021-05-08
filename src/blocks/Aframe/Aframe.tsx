import React from "react";
import styled, { keyframes } from "styled-components";

import { HeadScript } from "~ts/components/Layout";
import { IContainerProps } from "~ts/typings";

import { IUseAFrameProps, useAFrame } from "./hooks/useAFrame";
import { ABox } from "./scenes/ABox";

const revealComponentAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const AFrameElementStyled = styled.div`
  width: 100%;
  height: 500px;
  animation: ${revealComponentAnimation} 0.5s ease-out;
`;

interface IAFrameProps extends IUseAFrameProps, IContainerProps {}

// A react component for loading and unloading an aframe scene. The initial scene contents should
// be specified as an html string in sceneHtml. All props must be specified when the component
// mounts. Updates to props will be ignored.
//
// Optionally, aframe coponents to register for this scene can be passed as [{name, val}] arrays.
// Care is needed here to not define the same component different across scenes, since aframe
// components can't be unloaded.
export const AFrame = ({ children, components, primitives }: IAFrameProps) => {
  const { mounted } = useAFrame({ components, primitives });

  return (
    <>
      <HeadScript
        src="https://aframe.io/releases/1.2.0/aframe.min.js"
        type="javascript"
        async
      />
      {mounted && <AFrameElementStyled>{children} </AFrameElementStyled>}
    </>
  );
};

export type TImplementedComponents = "ABox";

export const AframeBlocks = ({ name }: { name: TImplementedComponents }) => (
  <>
    {name === "ABox" && (
      <AFrame>
        <ABox />
      </AFrame>
    )}
  </>
);
