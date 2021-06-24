module.exports = {
  ...require("prettierx"),
  cli: require("prettierx/src/cli"),
  // quick & ugly solution to help support prettier-plugin-x
  // (with Babel parser *only* at this point):
  languages: [
    {
      ...require("prettierx/src/language-js"),
      parsers: require("prettierx/src/language-js/parser-babel").parsers,
    },
  ],
  // TODO: support more languages such as CSS, HTML, etc.
  // FUTURE SOLUTION once updates from Prettier 2.3.1 are included in prettierX:
  // languages: require("prettierx/src/languages"),
};
