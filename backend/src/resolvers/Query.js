const { forwardTo } = require("prisma-binding");

const Query = {
  memoes: forwardTo("db")
};

module.exports = Query;
