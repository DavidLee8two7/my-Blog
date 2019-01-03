const { forwardTo } = require("prisma-binding");

const Query = {
  blogs: forwardTo("db"),
  blog: forwardTo("db"),
  resources: forwardTo("db"),
  resource: forwardTo("db"),
  memoes: forwardTo("db"),
  memo: forwardTo("db"),
  skills: forwardTo("db"),
  skill: forwardTo("db")
};

module.exports = Query;
