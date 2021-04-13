const removePostNameSlugSuffix = path => path.replace(/\[(.*?)\]/g, "");

const trimPathSlashes = path => path.slice(1, -1);

module.exports = {
  removePostNameSlugSuffix,
  trimPathSlashes
};
