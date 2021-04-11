import { boolean, select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import { PrismTheme } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";
import duotoneDark from "prism-react-renderer/themes/duotoneDark";
import duotoneLight from "prism-react-renderer/themes/duotoneLight";
import github from "prism-react-renderer/themes/github";
import nightOwl from "prism-react-renderer/themes/nightOwl";
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight";
import oceanicNext from "prism-react-renderer/themes/oceanicNext";
import okaidia from "prism-react-renderer/themes/okaidia";
import palenight from "prism-react-renderer/themes/palenight";
import shadesOfPurple from "prism-react-renderer/themes/shadesOfPurple";
import synthwave84 from "prism-react-renderer/themes/synthwave84";
import ultramin from "prism-react-renderer/themes/ultramin";
import vsDark from "prism-react-renderer/themes/vsDark";
import vsLight from "prism-react-renderer/themes/vsLight";
import React from "react";

import { Code as CodeComponent, ELanguage } from "../Code";

const exampleReactCode = `
function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`.trim();

const exampleClassReactCode = `
const Wrapper = ({ children }) => (
  <div style={{
    background: 'papayawhip',
    width: '100%',
    padding: '2rem'
  }}>
    {children}
  </div>
)

const Title = () => (
  <h3 style={{ color: 'palevioletred' }}>
    Hello World!
  </h3>
)

render(
  <Wrapper>
    <Title />
  </Wrapper>
)
`.trim();

const exampleJavascriptCode = `
let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]
// only one level is flattened

arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
`.trim();

const exampleSCSSCode = `
  *::after,
  *::before {
    @include box-sizing;
  }

  html {
    font-size: $base-font-size;
  }

  body {
    @include font-smoothing;
    font-family: $base-font-family;
    color: $base-text-color;
    background-color: $base-background-color;
    position: relative;
    overflow-x: hidden;
  }
`.trim();

type TCodeLanguages = ELanguage.SCSS | ELanguage.TSX | ELanguage.JAVASCRIPT;

enum EThemes {
  None = "none",
  Dracula = "dracula",
  DuotoneDark = "duotoneDark",
  DuotoneLight = "duotoneLight",
  Github = "github",
  NightOwl = "nightOwl",
  NightOwlLight = "nightOwlLight",
  OceanicNext = "oceanicNext",
  Okaidia = "okaidia",
  Palenight = "palenight",
  ShadesOfPurple = "shadesOfPurple",
  Synthwave84 = "synthwave84",
  Ultramin = "ultramin",
  VsDark = "vsDark",
  VsLight = "vsLight"
}

const getThemeObject = (theme: EThemes): PrismTheme => {
  switch (theme) {
    case EThemes.Dracula:
      return dracula;
    case EThemes.DuotoneDark:
      return duotoneDark;
    case EThemes.DuotoneLight:
      return duotoneLight;
    case EThemes.Github:
      return github;
    case EThemes.NightOwl:
      return nightOwl;
    case EThemes.NightOwlLight:
      return nightOwlLight;
    case EThemes.OceanicNext:
      return oceanicNext;
    case EThemes.Okaidia:
      return okaidia;
    case EThemes.Palenight:
      return palenight;
    case EThemes.ShadesOfPurple:
      return shadesOfPurple;
    case EThemes.Synthwave84:
      return synthwave84;
    case EThemes.Ultramin:
      return ultramin;
    case EThemes.VsDark:
      return vsDark;
    case EThemes.VsLight:
      return vsLight;

    default:
      return vsDark;
  }
};

const getCode = (language: TCodeLanguages, live: boolean): string => {
  if (live) {
    return exampleClassReactCode;
  }

  if (language === ELanguage.TSX) {
    return exampleReactCode;
  }

  if (language === ELanguage.JAVASCRIPT) {
    return exampleJavascriptCode;
  }

  return exampleSCSSCode;
};

export const CodeBlock = () => {
  const languagetypes: TCodeLanguages[] = [
    ELanguage.SCSS,
    ELanguage.TSX,
    ELanguage.JAVASCRIPT
  ];

  const themeTypes = Object.keys(EThemes).map(key => EThemes[key]);

  const languagetype = select(
    "Language",
    languagetypes,
    languagetypes[0],
    "OPTIONS"
  );

  const customTheme = select(
    "Editor Theme",
    themeTypes,
    themeTypes[0],
    "OPTIONS"
  );

  const liveEditor = boolean("Live", false, "OPTIONS");

  return (
    <CodeComponent
      codeString={getCode(languagetype, liveEditor)}
      language={languagetype}
      live={liveEditor}
      customTheme={customTheme !== EThemes.None && getThemeObject(customTheme)}
    />
  );
};
const meta = {
  title: "Blocks/Code"
};

export default meta as Meta;
