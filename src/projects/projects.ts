import { EProjectFields } from "~ts/enums";
import { TProject } from "~ts/typings";

export const PROJECTS: TProject[] = [
  {
    [EProjectFields.Name]: "Ts Use",
    [EProjectFields.Type]: "Node module",
    [EProjectFields.Techonolgies]: ["react", "hooks", "typescript"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/ts-use"
    },
    [EProjectFields.Showcase]: {
      name: "Npm",
      link: "https://www.npmjs.com/package/ts-use"
    },
    [EProjectFields.Tags]: ["project", "open source"]
  },
  {
    [EProjectFields.Name]: "Ts Udp Discovery",
    [EProjectFields.Type]: "Node module",
    [EProjectFields.Techonolgies]: ["node", "udp", "typescript"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/ts-udp-discovery"
    },
    [EProjectFields.Showcase]: {
      name: "Npm",
      link: "https://www.npmjs.com/package/ts-udp-discovery"
    },
    [EProjectFields.Tags]: ["project", "open source"]
  },
  {
    [EProjectFields.Name]: "Vue Template Vars",
    [EProjectFields.Type]: "Node module",
    [EProjectFields.Techonolgies]: ["vuejs", "typescript"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/vue-template-vars"
    },
    [EProjectFields.Showcase]: {
      name: "Npm",
      link: "https://www.npmjs.com/package/vue-template-vars"
    },
    [EProjectFields.Tags]: ["project", "open source"]
  },
  {
    [EProjectFields.Name]: "Quizess",
    [EProjectFields.Type]: "Node module",
    [EProjectFields.Techonolgies]: ["php", "js", "react"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/quizess"
    },
    [EProjectFields.Showcase]: {
      name: "WP Plugins",
      link: "https://wordpress.org/plugins/quizess/"
    },
    [EProjectFields.Tags]: ["project", "open source"]
  },
  {
    [EProjectFields.Name]: "MB Topbar",
    [EProjectFields.Type]: "Node module",
    [EProjectFields.Techonolgies]: ["php", "js", "react"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/Tihi321/mb-topbar"
    },
    [EProjectFields.Showcase]: {
      name: "WP Plugins",
      link: "https://wordpress.org/plugins/mb-topbar/"
    },
    [EProjectFields.Tags]: ["project", "open source"]
  },
  {
    [EProjectFields.Name]: "Eightshift",
    [EProjectFields.Type]: "Website",
    [EProjectFields.Techonolgies]: ["js", "php", "react", "wordpress"],
    [EProjectFields.Showcase]: {
      name: "Link",
      link: "https://eightshift.com/"
    },
    [EProjectFields.Tags]: ["project"]
  },
  {
    [EProjectFields.Name]: "Design Islands",
    [EProjectFields.Type]: "Website",
    [EProjectFields.Techonolgies]: ["js", "php", "react", "wordpress"],
    [EProjectFields.Showcase]: {
      name: "Link",
      link: "https://design.infinum.com/"
    },
    [EProjectFields.Tags]: ["project"]
  },
  {
    [EProjectFields.Name]: "Eightshift Boilerplate",
    [EProjectFields.Type]: "CLI Tool",
    [EProjectFields.Techonolgies]: ["node", "php", "js", "wordpress"],
    [EProjectFields.Repository]: {
      name: "Github",
      link: "https://github.com/infinum/eightshift-boilerplate"
    },
    [EProjectFields.Showcase]: {
      name: "Docs",
      link: "https://infinum.github.io/eightshift-docs/"
    },
    [EProjectFields.Tags]: ["open source"]
  },
  {
    [EProjectFields.Name]: "Python Lottie",
    [EProjectFields.Type]: "Blender Plugin",
    [EProjectFields.Techonolgies]: ["python", "blender api"],
    [EProjectFields.Repository]: {
      name: "Gitlab",
      link: "https://gitlab.com/Tihi321/python-lottie"
    },
    [EProjectFields.Tags]: ["open source"]
  }
];
