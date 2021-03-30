const React = require("react");

const { Provider } = require("./src/store");
const { ThemeContainer } = require("./src/themes");
const { Layout } = require("./src/components/Containers/Layout");

const wrapRootElement = ({ element }) => (
  <Provider>
    <ThemeContainer>{element}</ThemeContainer>
  </Provider>
);

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

module.exports = {
  wrapRootElement,
  wrapPageElement
};
