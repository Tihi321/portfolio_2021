import { useLottie } from "lottie-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { IStyledProps } from "~ts/typings";

const LottieContainerStyled = styled.div`
  width: 100%;
  height: auto;
`;

interface ILottieEvents {
  onComplete?: (...args: any[]) => void;
  onLoopComplete?: (...args: any[]) => void;
  onEnterFrame?: (...args: any[]) => void;
  onSegmentStart?: (...args: any[]) => void;
  onConfigReady?: (...args: any[]) => void;
  onDataReady?: (...args: any[]) => void;
  onDOMLoaded?: (...args: any[]) => void;
  onDestroy?: (...args: any[]) => void;
}

interface ILottieProps extends IStyledProps {
  data: Object;
  commands?: boolean;
  pause?: boolean;
  initialSegment?: Array<number>;
  autoplay?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  style?: Object;
  events?: ILottieEvents;
}

export const Lottie = (params: ILottieProps) => {
  const options = {
    animationData: params.data,
    loop: params.loop,
    autoplay: params.autoPlay || params.autoplay
  };
  const { View, play, stop, pause, destroy } = useLottie(options, params.style);
  const [playState, setPlayState] = useState(
    params.autoplay || params.autoPlay || false
  );

  useEffect(() => () => destroy(), []);

  const onClick = () => {
    if (params.commands) {
      if (!playState) {
        play();
        setPlayState(!playState);

        return;
      }

      if (params.pause) {
        pause();
        setPlayState(!playState);

        return;
      }

      stop();
      setPlayState(!playState);
    }
  };

  return (
    <LottieContainerStyled onClick={onClick}>{View}</LottieContainerStyled>
  );
};
