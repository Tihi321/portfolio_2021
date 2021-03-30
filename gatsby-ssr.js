const React = require("react");

const { Provider } = require("./src/store");
const { ThemeContainer } = require("./src/themes");
const { Layout } = require("./src/components/Containers/Layout");
const { CoreStylesClass } = require("./src/enums");

const wrapRootElement = ({ element }) => (
  <Provider>
    <ThemeContainer>{element}</ThemeContainer>
  </Provider>
);

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

const onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: CoreStylesClass
  });
};

module.exports = {
  wrapRootElement,
  wrapPageElement,
  onRenderBody
};
