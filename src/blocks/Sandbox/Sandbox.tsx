import React, { useState } from "react";
import styled from "styled-components";

import { IStyledProps } from "~ts/typings";

const SandboxStyled = styled(({ children, ...props }) => (
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

const IframeStyled = styled.iframe`
  width: 100%;
  height: 100%;
`;

export type EPermissions =
  | "geolocation"
  | "microphone"
  | "camera"
  | "midi"
  | "encrypted-media";

export type EIframePermissions = "allow-scripts" | "allow-same-origin";

interface ISandboxProps extends IStyledProps {
  title: string;
  src: string;
  style?: React.CSSProperties;
  permissions?: EPermissions[];
  iframePermissions?: EIframePermissions[];
}

export const Sandbox = ({
  className,
  title,
  src,
  style,
  permissions = [
    "geolocation",
    "microphone",
    "camera",
    "midi",
    "encrypted-media"
  ],
  iframePermissions = ["allow-scripts", "allow-same-origin"]
}: ISandboxProps) => {
  const [reveal, setReveal] = useState(false);

  return (
    <SandboxStyled reveal={reveal.toString()} style={style}>
      <IframeStyled
        onLoad={() => setReveal(true)}
        className={className}
        title={title}
        src={src}
        allow={permissions.join("; ")}
        sandbox={iframePermissions.join(" ")}
      />
    </SandboxStyled>
  );
};
