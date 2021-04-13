const getSlugFromPath = path => {
  const pathArray = path.split("/");

  return pathArray[pathArray.length - 1];
};

module.exports = {
  getSlugFromPath
};
