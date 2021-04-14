import { PrismTheme } from "prism-react-renderer";

import { ELanguage } from "~ts/enums";

export interface ICodeProps {
  codeString: string;
  language: ELanguage;
  live?: boolean;
  customTheme?: PrismTheme;
}
