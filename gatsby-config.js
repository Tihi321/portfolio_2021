const { Metadata, Setting, Author, Social } = require("./config");

const siteMetadata = {
  ...Metadata,
  ...Setting,
  author: Author,
  social: Social
};

const plugins = [
  "gatsby-plugin-styled-components",
  "gatsby-plugin-image",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sitemap",
  "gatsby-plugin-optimize-svgs",
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: ["lato:400,700"],
      display: "swap"
    }
  },
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      icon: "src/assets/images/icon.png"
    }
  },
  {
    resolve: "gatsby-plugin-mdx",
    options: {
      extensions: [".mdx", ".md"],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 860
          }
        }
      ]
    }
  },
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${__dirname}/src/assets/images/`
    },
    __key: "images"
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "blog",
      path: `${__dirname}/src/blog/`
    },
    __key: "blog"
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "pages",
      path: `${__dirname}/src/pages/`
    },
    __key: "pages"
  }
];

module.exports = {
  siteMetadata,
  plugins
};
