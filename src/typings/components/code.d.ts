import { ELanguage } from "@enums";
import { PrismTheme } from "prism-react-renderer";

export interface ICodeProps {
  codeString: string;
  language: ELanguage;
  live?: boolean;
  customTheme?: PrismTheme;
}
