export const createThemeSelector = (selector, callback) => props =>
  callback(selector(props));
