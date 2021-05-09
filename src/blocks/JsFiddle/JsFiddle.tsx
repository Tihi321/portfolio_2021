import React, { useState } from "react";
import styled from "styled-components";

import { ETheme } from "~ts/enums";
import { getTheme, useSelector } from "~ts/store";

const EmbedContainerStyled = styled(({ children, ...props }) => (
  <div {...props}>{children}</div>
))`
  width: 100%;
  min-height: 300px;
  max-height: 500px;
  height: 40vw;
  opacity: ${props => (props.reveal === "true" ? 1 : 0)};
  transition: opacity 0.5s ease;
  transition-delay: 1s;
`;

const EmbedIframeStyled = styled.iframe`
  width: 100%;
  height: 100%;
`;

type TTabs = "result" | "js" | "html" | "css";

enum EFiddleTheme {
  Light = "light",
  Dark = "dark"
}

interface IFiddleProps {
  fiddle: string;
  style?: React.CSSProperties;
  tabs?: TTabs[];
  title?: string;
  user?: string;
}

export const JsFiddle = ({ ...props }: IFiddleProps) => {
  const [reveal, setReveal] = useState(false);
  const theme = useSelector(getTheme);

  const title = props.title || "Embed";
  const user = props.user || "Tihi321";
  const tabs = props.tabs || ["result", "js"].join(",");

  const srcDef = `//jsfiddle.net/${user}/${props.fiddle}/embedded/${tabs}`;
  const srcTheme =
    theme === ETheme.Light ? srcDef : `${srcDef}/${EFiddleTheme.Dark}`;

  return (
    <EmbedContainerStyled style={props.style} reveal={reveal.toString()}>
      <EmbedIframeStyled
        onLoad={() => setReveal(true)}
        src={srcTheme}
        title={title}
        allowFullScreen
        frameBorder="0"
        loading="lazy"
      />
    </EmbedContainerStyled>
  );
};
