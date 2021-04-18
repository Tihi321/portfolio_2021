const path = require("path");

module.exports = {
  setupFilesAfterEnv: [
    path.resolve(__dirname, "./jest-configs/setup-test-env.js")
  ],
  transform: {
    "\\.svg": "<rootDir>/jest-configs/__mocks__/svg-transform.js",
    "^.+\\.(tsx?|jsx?)$": `<rootDir>/jest-configs/jest-preprocess.js`
  },
  moduleNameMapper: {
    "\\.svg": `<rootDir>/jest-configs/__mocks__/svg-transform.js`,
    "typeface-*": "identity-obj-proxy",
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/jest-configs/__mocks__/file-mocks.js`,
    "^~ts/blocks(.*)$": "<rootDir>/src/blocks/$1",
    "^~ts/components(.*)$": "<rootDir>/src/components/$1",
    "^~ts/typings(.*)$": "<rootDir>/src/typings/$1",
    "^~ts/enums(.*)$": "<rootDir>/src/enums/$1",
    "^~ts/hooks(.*)$": "<rootDir>/src/hooks/$1",
    "^~ts/pages(.*)$": "<rootDir>/src/pages/$1",
    "^~ts/projects(.*)$": "<rootDir>/src/projects/$1",
    "^~ts/store(.*)$": "<rootDir>/src/store/$1",
    "^~ts/styles(.*)$": "<rootDir>/src/styles/$1",
    "^~ts/templates(.*)$": "<rootDir>/src/templates/$1",
    "^~ts/themes(.*)$": "<rootDir>/src/themes/$1",
    "^~ts/utils(.*)$": "<rootDir>/src/utils/$1",
    "^~ts/posts(.*)$": "<rootDir>/content/posts/$1",
    "^~ts/images(.*)$": "<rootDir>/content/images/$1",
    "^~ts/gatsby(.*)$": "<rootDir>/gatsby/$1"
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
  globals: {
    __PATH_PREFIX__: ``
  },
  testRegex: ".test.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  collectCoverage: false,
  coverageReporters: ["lcov", "text", "html"]
};
