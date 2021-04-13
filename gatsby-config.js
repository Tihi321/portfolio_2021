const { Metadata, Setting, Author, Social } = require("./gatsby");
const { ContainerWidth } = require("./src/enums/container.ts");

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
  {
    resolve: "gatsby-plugin-mdx",
    options: {
      extensions: [".mdx", ".md"],
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: ContainerWidth
          }
        }
      ]
    }
  },
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp"
];

module.exports = {
  siteMetadata,
  plugins
};
