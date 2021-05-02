import { isEmpty } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { Rive as RiveJs, RiveParameters } from "rive-js";
import styled from "styled-components";

import { IStyledProps } from "~ts/typings";

const CanvasStyled = styled.canvas`
  width: 100%;
  height: auto;
`;

class RiveInstance {
  static run(params: RiveParameters): RiveJs {
    return new RiveJs(params);
  }
}

export interface IStateMachineInput {
  name: string;
  type: number;
  fire: () => void;
  value: number | boolean;
}

interface IRiveProps extends IStyledProps {
  commands?: boolean;
  autoplay?: boolean;
  autoPlay?: boolean;
  pause?: boolean;
  src?: string;
  artboard?: string;
  animations?: string | string[];
  stateMachine?: string;
  onStateMachines?: (stateMachines: IStateMachineInput[]) => void;
}

export const Rive = (params: IRiveProps) => {
  const [loaded, setLoaded] = useState(false);
  const [stateMachines, setStateMachines] = useState(
    [] as IStateMachineInput[]
  );
  const riveObjectRef = useRef({} as RiveJs);
  const animCanvasRef = useRef(null);
  const [play, setPlay] = useState(params.autoplay || params.autoPlay || false);

  useEffect(() => {
    const canvas = animCanvasRef.current;

    if (canvas && params.src) {
      riveObjectRef.current = RiveInstance.run({
        src: params.src,
        canvas,
        artboard: params.artboard,
        animations: params.animations,
        autoplay: params.autoplay || params.autoPlay,
        stateMachines: params.stateMachine,
        onload: () => {
          if (params.stateMachine) {
            setStateMachines(
              riveObjectRef.current.stateMachineInputs(params.stateMachine)
            );
          }
        }
      });
    }

    setLoaded(true);
  }, [animCanvasRef.current]);

  useEffect(() => {
    if (params.onStateMachines && !isEmpty(stateMachines)) {
      params.onStateMachines(stateMachines);
    }
  }, [stateMachines]);

  const onCanvasClick = () => {
    if (!play) {
      riveObjectRef.current.play(params.animations);
      setPlay(!play);

      return;
    }

    if (params.pause) {
      riveObjectRef.current.pause(params.animations);
      setPlay(!play);

      return;
    }

    riveObjectRef.current.stop(params.animations);
    setPlay(!play);
  };

  return params.commands && loaded ? (
    <CanvasStyled
      className={params.className}
      ref={animCanvasRef}
      onClick={onCanvasClick}
    />
  ) : (
    <CanvasStyled className={params.className} ref={animCanvasRef} />
  );
};
