const { resolve } = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  stories: [
    "../content/posts/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/blocks/**/*.stories.@(js|jsx|ts|tsx)",
    "./components/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs",
  ],

  webpackFinal: async config => {
    config.node = {
      fs: 'empty',
      global: true,
   };
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          { from: resolve(__dirname, '../content/assets/'), to: resolve(__dirname, '../docs/static/assets/') },
        ],
        options: {
          concurrency: 100,
        },
      })
  );

    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"];
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
        plugins: [
          require.resolve("@babel/plugin-proposal-class-properties"),
          // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
          require.resolve("babel-plugin-remove-graphql-queries"),
        ],
      },
    });
    config.module.rules.push({
      test: /\.(riv)$/,
      loader: require.resolve("file-loader"),
      options: {
        regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.riv$/i,
        name: '[name].[ext]',
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.alias = {...config.resolve.alias, ...{
      "~ts/blocks": resolve(__dirname, '../src/blocks/'),
      "~ts/components": resolve(__dirname, '../src/components/'),
      "~ts/typings": resolve(__dirname, '../src/typings/'),
      "~ts/enums": resolve(__dirname, '../src/enums/'),
      "~ts/hooks": resolve(__dirname, '../src/hooks/'),
      "~ts/pages": resolve(__dirname, '../src/pages/'),
      "~ts/projects": resolve(__dirname, '../src/projects/'),
      "~ts/store": resolve(__dirname, '../src/store/'),
      "~ts/styles": resolve(__dirname, '../src/styles/'),
      "~ts/templates": resolve(__dirname, '../src/templates/'),
      "~ts/themes": resolve(__dirname, '../src/themes/'),
      "~ts/utils": resolve(__dirname, '../src/utils/'),
      "~ts/posts": resolve(__dirname, '../content/posts/'),
      "~ts/images": resolve(__dirname, '../content/images/'),
      "~ts/assets": resolve(__dirname, '../content/assets/'),
      "~ts/data": resolve(__dirname, '../content/data/'),
      "~ts/gatsby": resolve(__dirname, '../gatsby/'),
    }};

    return config
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  }
}