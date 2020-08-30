const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = (on, config) => {
  // on("task", require("@cypress/code-coverage/task")(on, config));
  // on(
  //   "file:preprocessor",
  //   require("@cypress/code-coverage/use-browserify-istanbul")
  // );
  on("file:preprocessor", cucumber());
};
