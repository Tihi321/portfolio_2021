const { resolve } = require("path");

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
    "@storybook/addon-postcss",
  ],
  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader");
    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ];
    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve("@babel/plugin-proposal-class-properties"),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve("babel-plugin-remove-graphql-queries"),
    ]
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
    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.alias = {...config.resolve.alias, ...{
      "@src": resolve(__dirname, '../src'),
      "@blocks": resolve(__dirname, '../src/blocks/'),
      "@components": resolve(__dirname, '../src/components/'),
      "@typings": resolve(__dirname, '../src/typings/'),
      "@enums": resolve(__dirname, '../src/enums/'),
      "@hooks": resolve(__dirname, '../src/hooks/'),
      "@pages": resolve(__dirname, '../src/pages/'),
      "@projects": resolve(__dirname, '../src/projects/'),
      "@store": resolve(__dirname, '../src/store/'),
      "@styles": resolve(__dirname, '../src/styles/'),
      "@templates": resolve(__dirname, '../src/templates/'),
      "@themes": resolve(__dirname, '../src/themes/'),
      "@utils": resolve(__dirname, '../src/utils/'),
      "@posts": resolve(__dirname, '../content/posts/'),
      "@images": resolve(__dirname, '../content/images/'),
    }};
    return config
  },
}