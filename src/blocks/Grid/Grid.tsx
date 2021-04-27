import React, { useState } from "react";
import { InputElement } from "src/typings";
import styled, { useTheme } from "styled-components";

import { HeadScript } from "~ts/components/Layout";
import { EBreakpoints, ESide } from "~ts/enums";
import { secondaryColor } from "~ts/themes";
import { media } from "~ts/utils";

const SVGGridStyled = styled.div`
  max-width: 500px;
  margin: 0 auto;
  --ts-path-grid-fill: ${secondaryColor};
  padding: 30px;

  ${media(EBreakpoints.TABLET, ESide.UP)} {
    padding: 50px;
  }
`;

const SVGInputsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const GridInputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${media(EBreakpoints.TABLET, ESide.UP)} {
    width: 50%;
  }
`;

const GridInputLabel = styled.div`
  width: 100%;
  font-weight: 700;
  padding: 5px 0;
`;

const GridInput = styled.input`
  width: 100%;
`;

const GridTextareaField = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  width: 100%;
`;

const GridTextarea = styled.textarea`
  width: 100%;
  resize: none;
`;

export const Grid = () => {
  const theme = useTheme();
  const strokeColor = secondaryColor({ theme });

  const [gridOpacity, setGridOpacity] = useState(0.6);
  const [gridSize, setGridSize] = useState(10);
  const [gridPath, setGridPath] = useState(
    "M 5 1 C -1 1, -1 9, 5 9 M 5 3 C 8 3, 8 7, 5 7 M 5 3 C 2 3, 2 7, 5 7 M 5 1 V 3 M 5 7 V 9"
  );

  const onChangeCallback = (event: HTMLInputElement, callback: Function) => {
    const { value } = ((event as unknown) as InputElement).target;
    callback(value);
  };

  return (
    <>
      <HeadScript
        src="https://cdn.jsdelivr.net/gh/Tihi321/svelte-web-components/cdn/ts-path-grid.js"
        type="javascript"
      />
      <SVGGridStyled>
        <ts-path-grid
          fill="transparent"
          opacity={gridOpacity}
          stroke={strokeColor}
          strokewidth={0.5}
          vbx={gridSize}
          vby={gridSize}
          path={gridPath}
        />
        <SVGInputsContainerStyled>
          <GridInputField>
            <GridInputLabel>Grid opacity</GridInputLabel>
            <GridInput
              value={gridOpacity}
              onChange={event => onChangeCallback(event, setGridOpacity)}
              type="number"
              min="0"
              max="1"
              step="0.1"
            />
          </GridInputField>
          <GridInputField>
            <GridInputLabel>Grid size</GridInputLabel>
            <GridInput
              value={gridSize}
              onChange={event => onChangeCallback(event, setGridSize)}
              type="number"
              max="100"
              min="5"
            />
          </GridInputField>
          <GridTextareaField>
            <GridInputLabel>Grid opacity</GridInputLabel>
            <GridTextarea
              value={gridPath}
              onChange={event => onChangeCallback(event, setGridPath)}
              rows={4}
            />
          </GridTextareaField>
        </SVGInputsContainerStyled>
      </SVGGridStyled>
    </>
  );
};
