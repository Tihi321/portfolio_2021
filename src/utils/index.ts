const { getSlugFromPath } = require("./slug.ts");
const { removePostNameSlugSuffix, trimPathSlashes } = require("./path.ts");
const { TAG_ADDRESS, createTagURI } = require("./tags.ts");
const { createPaginatedURI, createPaged } = require("./pagination.ts");

export * from "./responsive";
export {
  getSlugFromPath,
  removePostNameSlugSuffix,
  trimPathSlashes,
  TAG_ADDRESS,
  createTagURI,
  createPaginatedURI,
  createPaged
};
