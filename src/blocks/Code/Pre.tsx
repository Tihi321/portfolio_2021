import React from "react";
import styled from "styled-components";

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: auto;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;
