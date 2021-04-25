import { EProjectFields } from "~ts/enums";
import { TProject } from "~ts/typings";

export const PROJECTS: TProject[] = [
  {
    [EProjectFields.Name]: "Ts Use",
    [EProjectFields.Type]: "Module",
    [EProjectFields.Techonolgies]: ["react", "hooks", "typescript"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/ts-use"
    },
    [EProjectFields.Showcase]: {
      name: "Npm",
      link: "https://www.npmjs.com/package/ts-use"
    },
    [EProjectFields.Tags]: ["npm", "open source"]
  },
  {
    [EProjectFields.Name]: "Ts Udp Discovery",
    [EProjectFields.Type]: "Module",
    [EProjectFields.Techonolgies]: ["node", "udp", "typescript"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/ts-udp-discovery"
    },
    [EProjectFields.Showcase]: {
      name: "Npm",
      link: "https://www.npmjs.com/package/ts-udp-discovery"
    },
    [EProjectFields.Tags]: ["npm", "open source"]
  },
  {
    [EProjectFields.Name]: "Vue Template Vars",
    [EProjectFields.Type]: "Module",
    [EProjectFields.Techonolgies]: ["vuejs", "typescript"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/vue-template-vars"
    },
    [EProjectFields.Showcase]: {
      name: "Npm",
      link: "https://www.npmjs.com/package/vue-template-vars"
    },
    [EProjectFields.Tags]: ["npm", "open source"]
  },
  {
    [EProjectFields.Name]: "Quizess",
    [EProjectFields.Type]: "Plugin",
    [EProjectFields.Techonolgies]: ["php", "js", "react"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/quizess"
    },
    [EProjectFields.Showcase]: {
      name: "Wordpress",
      link: "https://wordpress.org/plugins/quizess/"
    },
    [EProjectFields.Tags]: ["wordpress", "open source"]
  },
  {
    [EProjectFields.Name]: "MB Topbar",
    [EProjectFields.Type]: "Plugin",
    [EProjectFields.Techonolgies]: ["php", "js", "react"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/mb-topbar"
    },
    [EProjectFields.Showcase]: {
      name: "Wordpress",
      link: "https://wordpress.org/plugins/mb-topbar/"
    },
    [EProjectFields.Tags]: ["wordpress", "open source"]
  },
  {
    [EProjectFields.Name]: "Eightshift Development kit",
    [EProjectFields.Type]: "CLI Tool",
    [EProjectFields.Techonolgies]: ["node", "php", "js"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/infinum/eightshift-boilerplate"
    },
    [EProjectFields.Showcase]: {
      name: "Docs",
      link: "https://infinum.github.io/eightshift-docs/"
    },
    [EProjectFields.Tags]: ["open source", "contribution", "wordpress"]
  },
  {
    [EProjectFields.Name]: "Eightshift",
    [EProjectFields.Type]: "Website",
    [EProjectFields.Techonolgies]: ["js", "php", "react"],
    [EProjectFields.Showcase]: {
      name: "Link",
      link: "https://eightshift.com/"
    },
    [EProjectFields.Tags]: ["client", "wordpress"]
  },
  {
    [EProjectFields.Name]: "Design Islands",
    [EProjectFields.Type]: "Website",
    [EProjectFields.Techonolgies]: ["js", "php", "react"],
    [EProjectFields.Showcase]: {
      name: "Link",
      link: "https://design.infinum.com/"
    },
    [EProjectFields.Tags]: ["client", "wordpress"]
  },
  {
    [EProjectFields.Name]: "Python Lottie",
    [EProjectFields.Type]: "Plugin",
    [EProjectFields.Techonolgies]: ["python", "blender"],
    [EProjectFields.Repository]: {
      name: "Gitlab",
      link: "https://gitlab.com/Tihi321/python-lottie"
    },
    [EProjectFields.Tags]: ["open source", "contribution"]
  }
];
