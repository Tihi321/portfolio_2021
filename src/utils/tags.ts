const TAG_ADDRESS = "category";
const createTagURI = tag => `${TAG_ADDRESS}/${tag.toLowerCase()}`;

module.exports = {
  TAG_ADDRESS,
  createTagURI
};
