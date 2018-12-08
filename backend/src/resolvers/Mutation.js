const Mutations = {
  createMemo(parent, args, ctx, info) {
    const memo = ctx.db.mutation.createMemo(
      {
        data: {
          ...args
        }
      },
      info
    );
    console.log(memo);
    return memo;
  }
};

module.exports = Mutations;
