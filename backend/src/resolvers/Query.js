const { forwardTo } = require("prisma-binding");

const Query = {
  blogs: forwardTo("db"),
  blog: forwardTo("db"),
  blogsConnection: forwardTo("db"),
  memoes: forwardTo("db"),
  memo: forwardTo("db"),
  memoesConnection: forwardTo("db"),
  skills: forwardTo("db"),
  skill: forwardTo("db")
};

module.exports = Query;
