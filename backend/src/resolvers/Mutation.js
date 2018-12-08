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
  }
};

module.exports = Mutations;
