import { EProjectFields } from "~ts/enums";
import { TProject } from "~ts/typings";

export const PROJECTS: TProject[] = [
  {
    [EProjectFields.Name]: "Kobilica",
    [EProjectFields.Type]: "Company",
    [EProjectFields.Techonolgies]: ["svelte", "threejs", "typescript"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/kobilica",
    },
    [EProjectFields.Showcase]: {
      name: "Website",
      link: "https://www.kobilica.hr/",
    },
    [EProjectFields.Tags]: ["netlify", "website"],
  },
  {
    [EProjectFields.Name]: "Puzzles",
    [EProjectFields.Type]: "Games web portal",
    [EProjectFields.Techonolgies]: ["svelte", "typescript"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/puzzles",
    },
    [EProjectFields.Showcase]: {
      name: "Website",
      link: "https://puzzles.tihomir-selak.from.hr/",
    },
    [EProjectFields.Tags]: ["netlify", "website", "crossword", "wordle"],
  },
  {
    [EProjectFields.Name]: "Ts Use",
    [EProjectFields.Type]: "Module",
    [EProjectFields.Techonolgies]: ["react", "hooks", "typescript"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/ts-use",
    },
    [EProjectFields.Showcase]: {
      name: "Npm",
      link: "https://www.npmjs.com/package/ts-use",
    },
    [EProjectFields.Tags]: ["npm", "open source"],
  },
  {
    [EProjectFields.Name]: "TSL Utils",
    [EProjectFields.Type]: "Module",
    [EProjectFields.Techonolgies]: ["utils", "typescript"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/tsl-utils",
    },
    [EProjectFields.Showcase]: {
      name: "Npm",
      link: "https://www.npmjs.com/package/tsl-utils",
    },
    [EProjectFields.Tags]: ["npm", "open source"],
  },
  {
    [EProjectFields.Name]: "Ts Components library",
    [EProjectFields.Type]: "Module",
    [EProjectFields.Techonolgies]: ["svelte", "typescript", "web components"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/ts-components-library",
    },
    [EProjectFields.Showcase]: {
      name: "Storybook",
      link:
        "https://tihi321.github.io/ts-components-library/?path=/story/components-common-accordion--default",
    },
    [EProjectFields.Tags]: ["npm", "open source"],
  },
  {
    [EProjectFields.Name]: "Quizess",
    [EProjectFields.Type]: "Plugin",
    [EProjectFields.Techonolgies]: ["php", "js", "react"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/quizess",
    },
    [EProjectFields.Showcase]: {
      name: "Wordpress",
      link: "https://wordpress.org/plugins/quizess/",
    },
    [EProjectFields.Tags]: ["wordpress", "open source"],
  },
  {
    [EProjectFields.Name]: "MB Topbar",
    [EProjectFields.Type]: "Plugin",
    [EProjectFields.Techonolgies]: ["php", "js", "react"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/mb-topbar",
    },
    [EProjectFields.Showcase]: {
      name: "Wordpress",
      link: "https://wordpress.org/plugins/mb-topbar/",
    },
    [EProjectFields.Tags]: ["wordpress", "open source"],
  },
  {
    [EProjectFields.Name]: "Eightshift Development kit",
    [EProjectFields.Type]: "CLI Tool",
    [EProjectFields.Techonolgies]: ["node", "php", "js"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/infinum/eightshift-boilerplate",
    },
    [EProjectFields.Showcase]: {
      name: "Docs",
      link: "https://infinum.github.io/eightshift-docs/",
    },
    [EProjectFields.Tags]: ["open source", "contribution", "wordpress"],
  },
  {
    [EProjectFields.Name]: "Python Lottie",
    [EProjectFields.Type]: "Plugin",
    [EProjectFields.Techonolgies]: ["python", "blender"],
    [EProjectFields.Repository]: {
      name: "Gitlab",
      link: "https://gitlab.com/Tihi321/python-lottie",
    },
    [EProjectFields.Tags]: ["open source", "contribution"],
  },
];
