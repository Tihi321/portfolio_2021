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

type TTabs = "js" | "html" | "css";

enum ECodepenTheme {
  Light = "light",
  Dark = "dark"
}

interface ICodepenProps {
  pen: string;
  style?: React.CSSProperties;
  tab?: TTabs;
  result?: boolean;
  title?: string;
  user?: string;
}

export const Codepen = ({ ...props }: ICodepenProps) => {
  const [reveal, setReveal] = useState(false);
  const theme = useSelector(getTheme);

  const title = props.title || "Embed";
  const user = props.user || "Tihi321";
  const tabs = props.tab ? [props.tab] : [];

  const tabsString = props.result
    ? [...tabs, "result"].join(",")
    : tabs.join(",");

  const codepenTheme =
    theme === ETheme.Light ? ECodepenTheme.Light : ECodepenTheme.Dark;

  const srcCodePen = "https://codepen.io";
  const srcUser = `${srcCodePen}/${user}`;
  const src = `${srcUser}/embed/${props.pen}?theme-id=${codepenTheme}&default-tab=${tabsString}`;
  const srcPen = `${srcUser}/pen/${props.pen}`;

  return (
    <>
      <EmbedContainerStyled style={props.style} reveal={reveal.toString()}>
        <EmbedIframeStyled
          onLoad={() => setReveal(true)}
          src={src}
          title={title}
          allowFullScreen
          frameBorder="0"
          loading="lazy"
          allowTransparency
        >
          See the Pen <a href={srcPen}>{title}</a> by
          {user} (<a href={srcUser}>@{user}</a>) on{" "}
          <a href={srcCodePen}>CodePen</a>
        </EmbedIframeStyled>
      </EmbedContainerStyled>
    </>
  );
};
