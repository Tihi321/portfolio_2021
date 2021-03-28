const React = require("react");

const { Provider } = require("./src/store");

const wrapRootElement = ({ element }) => <Provider>{element}</Provider>;

module.exports = {
  wrapRootElement
};
