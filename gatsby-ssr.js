const React = require("react");

const { Provider } = require("./src/store");
const { ThemeContainer } = require("./src/themes");

const wrapRootElement = ({ element }) => (
  <Provider>
    <ThemeContainer>{element}</ThemeContainer>
  </Provider>
);

module.exports = {
  wrapRootElement
};
