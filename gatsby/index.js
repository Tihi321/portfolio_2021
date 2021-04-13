const config = require("./config");
const createPages = require("./createPages");
const createNodes = require("./createNodes");
const schema = require("./schema");

module.exports = {
  ...config,
  ...createPages,
  ...createNodes,
  ...schema
};
