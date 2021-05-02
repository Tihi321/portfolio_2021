import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { TYoutubeEvents, TYoutubeOptions, useYoutube } from "ts-use";

const YoutubeContainerStyled = styled(({ className, children, ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
))`
  width: 100%;
  padding-bottom: 56.2%;
  position: relative;
  filter: blur(${props => (props.loading === "true" ? "30px" : "0")});
  opacity: ${props => (props.loading === "true" ? 0 : 1)};
  transition: opacity 1s ease, filter 1s ease;
`;

const YoutubePlayerStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

interface IYoutubeProps {
  videoId: string;
  options?: TYoutubeOptions;
  events?: TYoutubeEvents;
}

export const Youtube = (params: IYoutubeProps) => {
  const youtubeRef = useRef({} as HTMLElement);
  const { addElement, loading } = useYoutube({
    videoId: params.videoId,
    options: params.options,
    events: params.events
  });

  useEffect(() => addElement(youtubeRef.current), [youtubeRef.current]);

  return (
    <YoutubeContainerStyled loading={`${loading}`}>
      <YoutubePlayerStyled ref={youtubeRef} />
    </YoutubeContainerStyled>
  );
};
