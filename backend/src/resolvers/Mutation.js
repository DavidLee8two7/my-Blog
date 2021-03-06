const Mutations = {
  async createBlog(parent, args, ctx, info) {
    const blog = await ctx.db.mutation.createBlog(
      {
        data: {
          ...args
        }
      },
      info
    );
    return blog;
  },

  async createMemo(parent, args, ctx, info) {
    const memo = await ctx.db.mutation.createMemo(
      {
        data: {
          ...args
        }
      },
      info
    );
    return memo;
  }
};

module.exports = Mutations;
