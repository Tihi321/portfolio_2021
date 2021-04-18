import React from "react";
import styled from "styled-components";

import { EBreakpoints, ESide } from "~ts/enums";
import { IStyledProps } from "~ts/typings";
import { media } from "~ts/utils";

const SandboxStyled = styled.div`
  padding: 30px 0;

  ${media(EBreakpoints.TABLET, ESide.UP)} {
    padding: 50px 0;
  }
`;

const IframeStyled = styled.iframe`
  width: 100%;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  height: 58vw;
  max-height: 500px;
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
  permissions = ["geolocation", "microphone", "camera", "midi"],
  iframePermissions = ["allow-scripts", "allow-same-origin"]
}: ISandboxProps) => (
  <SandboxStyled>
    <IframeStyled
      className={className}
      title={title}
      style={style && style}
      src={src}
      allow={permissions.join("; ")}
      sandbox={iframePermissions.join(" ")}
    />
  </SandboxStyled>
);
