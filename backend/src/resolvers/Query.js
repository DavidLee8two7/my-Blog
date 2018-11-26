const { forwardTo } = require("prisma-binding");

const Query = {
  skills: forwardTo("db")
};

module.exports = Query;
