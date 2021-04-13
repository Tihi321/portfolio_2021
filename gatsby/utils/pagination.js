const { range } = require("lodash");
const { PAGED_PREFIX } = require("../constants");

const createPaginatedURI = (address, pageNumber) =>
  `${address}?${PAGED_PREFIX}=${pageNumber}`;

const createPaged = (numOfPosts, postsPerPage) =>
  Math.ceil(numOfPosts / postsPerPage);

const createPagedPageCallback = ({
  callback,
  postsPerPage,
  numOfPosts,
  path,
  component,
  context
}) => {
  const paged = createPaged(numOfPosts, postsPerPage);
  range(paged).forEach(page => {
    if (page > 0) {
      callback({
        path: createPaginatedURI(path, page),
        component,
        context
      });
    } else {
      callback({
        path,
        component,
        context
      });
    }
  });
};

module.exports = {
  createPaginatedURI,
  createPaged,
  createPagedPageCallback
};
