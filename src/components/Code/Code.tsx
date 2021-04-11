import Highlight, { defaultProps, PrismTheme } from "prism-react-renderer";
import lightTheme from "prism-react-renderer/themes/duotoneLight";
import darkTheme from "prism-react-renderer/themes/palenight";
import React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

import { ETheme, getTheme, useSelector } from "../../store";
import { Line } from "./Line";
import { LineContent } from "./LineContent";
import { LineNo } from "./LineNo";
import { Pre } from "./Pre";

export enum ELanguage {
  CSS = "css",
  JAVASCRIPT = "javascript",
  JSX = "jsx",
  GIT = "git",
  GRAPHQL = "graphql",
  JSON = "json",
  MARKDOWN = "markdown",
  PYTHON = "python",
  SASS = "sass",
  SCSS = "scss",
  SQL = "sql",
  TSX = "tsx",
  TYPESCRIPT = "typescript",
  WASM = "wasm",
  YAML = "yaml"
}

interface ICodeProps {
  codeString: string;
  language: ELanguage;
  live?: boolean;
  customTheme?: PrismTheme;
}

const getThemeObject = (theme: ETheme) =>
  theme === ETheme.Dark ? lightTheme : darkTheme;

export const Code = ({
  codeString,
  language,
  customTheme,
  live = false
}: ICodeProps) => {
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
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={themeObject}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, index) => (
            <Line key={`code-${index}`} {...getLineProps({ line, key: index })}>
              <LineNo>{index + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span
                    key={`code-${index}-${key}`}
                    {...getTokenProps({ token, key })}
                  />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};
