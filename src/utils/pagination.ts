const { range } = require("lodash");

const { PAGED_PREFIX } = require("../enums/pagination.ts");

const createPaged = (numOfPosts, postsPerPage) =>
  Math.ceil(numOfPosts / postsPerPage);

const createPaginatedURI = (address, paged) =>
  `${address}?${PAGED_PREFIX}=${paged}`;

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
