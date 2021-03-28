import React from "react";
import styled from "styled-components";

import { logoBackgroundColor, logoforegroundColor } from "../../themes";

const LogoStyled = styled.svg`
  fill: none;
  width: 126px;
  height: 130px;
  --logo-background-color: ${logoBackgroundColor};
  --logo-text-color: ${logoforegroundColor};
`;

export const Logo = () => (
  <LogoStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 126">
    <path
      d="M0 5a5 5 0 015-5h120a5 5 0 015 5v116a5 5 0 01-5 5H5a5 5 0 01-5-5V5z"
      fill="var(--logo-background-color)"
    />
    <path
      d="M49.532 115h11.48V69.326H76.92V59.24H33.624v10.086h15.908V115zM101.021 115.738c10.906 0 19.024-5.658 19.024-15.99 0-9.594-5.494-13.858-15.252-18.04l-2.87-1.23c-4.92-2.132-7.052-3.526-7.052-6.97 0-2.788 2.132-4.92 5.494-4.92 3.28 0 5.412 1.394 7.38 4.92l8.938-5.74c-3.772-6.642-9.02-9.184-16.318-9.184-10.25 0-16.81 6.56-16.81 15.17 0 9.348 5.494 13.776 13.776 17.302l2.87 1.23c5.248 2.296 8.364 3.69 8.364 7.626 0 3.28-3.034 5.658-7.79 5.658-5.658 0-8.856-2.952-11.316-6.97l-9.348 5.412c3.362 6.642 10.25 11.726 20.91 11.726z"
      fill="var(--logo-text-color)"
    />
  </LogoStyled>
);