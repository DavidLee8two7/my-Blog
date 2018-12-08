const { forwardTo } = require("prisma-binding");

const Query = {
  blogs: forwardTo("db"),
  blog: forwardTo("db"),
  blogsConnection: forwardTo("db")
};

module.exports = Query;
