const { TAG_ADDRESS } = require("../enums/tags.ts");

const createTagURI = tag => `${TAG_ADDRESS}/${tag.toLowerCase()}`;

module.exports = {
  createTagURI
};
