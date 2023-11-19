import { boolean, select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import { PrismTheme, themes } from "prism-react-renderer";
import React from "react";

import { ELanguage } from "~ts/enums";

import { Code as CodeComponent } from "../Code";

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
  VsLight = "vsLight",
}

const getThemeObject = (theme: EThemes): PrismTheme => {
  switch (theme) {
    case EThemes.Dracula:
      return themes.dracula;
    case EThemes.DuotoneDark:
      return themes.duotoneDark;
    case EThemes.DuotoneLight:
      return themes.duotoneLight;
    case EThemes.Github:
      return themes.github;
    case EThemes.NightOwl:
      return themes.nightOwl;
    case EThemes.NightOwlLight:
      return themes.nightOwlLight;
    case EThemes.OceanicNext:
      return themes.oceanicNext;
    case EThemes.Okaidia:
      return themes.okaidia;
    case EThemes.Palenight:
      return themes.palenight;
    case EThemes.ShadesOfPurple:
      return themes.shadesOfPurple;
    case EThemes.Synthwave84:
      return themes.synthwave84;
    case EThemes.Ultramin:
      return themes.ultramin;
    case EThemes.VsDark:
      return themes.vsDark;
    case EThemes.VsLight:
      return themes.vsLight;

    default:
      return themes.vsDark;
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
  const languagetypes: TCodeLanguages[] = [ELanguage.SCSS, ELanguage.TSX, ELanguage.JAVASCRIPT];

  const themeTypes = Object.values(EThemes);

  const languagetype = select("Language", languagetypes, languagetypes[0], "OPTIONS");

  const customTheme = select("Editor Theme", themeTypes, themeTypes[0], "OPTIONS");

  const liveEditor = boolean("Live", false, "OPTIONS");

  return (
    <CodeComponent
      codeString={getCode(languagetype, liveEditor)}
      language={languagetype}
      live={liveEditor}
      customTheme={customTheme !== EThemes.None ? getThemeObject(customTheme) : undefined}
    />
  );
};
const meta = {
  title: "Blocks/Code",
};

export default meta as Meta;
