const { Metadata, Setting, Author, Social } = require("./gatsby");
const { CONTAINER_WIDTH } = require("./src/enums/container.ts");

const { join } = require("path");

const siteMetadata = {
  ...Metadata,
  ...Setting,
  author: Author,
  social: Social
};

const plugins = [
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${__dirname}/content/images/`
    },
    __key: "images"
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "posts",
      path: `${__dirname}/content/posts/`
    },
    __key: "posts"
  },
  {
    resolve: "gatsby-plugin-root-import",
    options: {
      src: join(__dirname, "src"),
      images: join(__dirname, "content/images")
    }
  },
  "gatsby-plugin-styled-components",
  "gatsby-plugin-image",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sitemap",
  "gatsby-plugin-optimize-svgs",
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: ["lato:400,400i,700"],
      display: "swap"
    }
  },
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "tihomir-selak-portfolio-site",
      start_url: "/",
      icon: "content/images/icon.png"
    }
  },
  "gatsby-remark-images",
  "gatsby-remark-reading-time",
  {
    resolve: "gatsby-plugin-mdx",
    options: {
      extensions: [".mdx", ".md"],
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: CONTAINER_WIDTH
          }
        },
        "gatsby-remark-reading-time"
      ]
    }
  },
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /\.inline\.svg$/,
        omitKeys: [
          "xmlnsDc",
          "xmlnsCc",
          "xmlnsRdf",
          "xmlnsSvg",
          "xmlnsSodipodi",
          "xmlnsInkscape"
        ]
      }
    }
  },
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        "~ts/blocks": "src/blocks",
        "~ts/components": "src/components",
        "~ts/typings": "src/typings",
        "~ts/enums": "src/enums",
        "~ts/hooks": "src/hooks",
        "~ts/pages": "src/pages",
        "~ts/projects": "src/projects",
        "~ts/store": "src/store",
        "~ts/styles": "src/styles",
        "~ts/templates": "src/templates",
        "~ts/themes": "src/themes",
        "~ts/utils": "src/utils",
        "~ts/posts": "content/posts",
        "~ts/images": "content/images"
      }
    }
  }
];

module.exports = {
  siteMetadata,
  plugins
};
