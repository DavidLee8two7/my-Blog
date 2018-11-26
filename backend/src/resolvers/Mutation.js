const Mutations = {
  async createSkill(parent, args, ctx, info) {
    // TODO: check if they are logged in
    const skill = await ctx.db.mutation.createSkill(
      {
        data: {
          ...args
        }
      },
      info
    );
    return skill;
  }
};

module.exports = Mutations;
