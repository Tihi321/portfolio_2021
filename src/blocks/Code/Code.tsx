import { Highlight, themes } from "prism-react-renderer";
import React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

import { ETheme } from "~ts/enums";
import { getTheme, useSelector } from "~ts/store";
import { ICodeProps } from "~ts/typings";

import { Line } from "./Line";
import { LineContent } from "./LineContent";
import { LineNo } from "./LineNo";
import { Pre } from "./Pre";

const getThemeObject = (theme: ETheme) =>
  theme === ETheme.Dark ? themes.palenight : themes.duotoneLight;

export const Code = ({ codeString, language, customTheme, live = false }: ICodeProps) => {
  const theme: ETheme = useSelector(getTheme);

  const themeObject = customTheme || getThemeObject(theme);

  if (live) {
    return (
      <LiveProvider code={codeString} noInline theme={themeObject}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }

  return (
    <Highlight code={codeString} language={language} theme={themeObject}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, index) => (
            <Line key={`code-${index}`} {...getLineProps({ line, key: index })}>
              <LineNo>{index + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={`code-${index}-${key}`} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};
