import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { IRiveObjectProps, RiveAnimation } from "./RiveAnimation";

const CanvasStyled = styled.canvas`
  width: 100%;
  height: auto;
`;

interface IRiveProps extends IRiveObjectProps {
  play?: boolean;
  pause?: boolean;
  stop?: boolean;
}

export const Rive = (params: IRiveProps) => {
  const [loaded, setLoaded] = useState(false);
  const riveObjectRef = useRef({});
  const animCanvasRef = useRef(null);
  const riveObject = riveObjectRef.current as RiveAnimation;

  useEffect(() => {
    const canvas = animCanvasRef.current;

    if (canvas && params.src) {
      riveObjectRef.current = RiveAnimation.run({
        src: params.src,
        canvas,
        artboard: params.artboard,
        animations: params.animations,
        layout: params.layout,
        autoplay: params.autoplay,
        onload: params.onload,
        onloaderror: params.onloaderror,
        onplay: params.onplay,
        onpause: params.onpause,
        onstop: params.onstop,
        onloop: params.onloop
      });
    }

    setLoaded(true);
  }, [animCanvasRef.current]);

  if (loaded && riveObject && params.play) {
    riveObject.play(params.animations);
  }

  if (loaded && riveObject && params.pause) {
    riveObject.pause(params.animations);
  }

  if (loaded && riveObject && params.stop) {
    riveObject.stop(params.animations);
  }

  return <CanvasStyled ref={animCanvasRef} />;
};
