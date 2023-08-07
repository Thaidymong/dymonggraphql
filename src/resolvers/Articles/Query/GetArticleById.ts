import { knx } from "src/connections/CreateKnexConnections";

export const GetArticleById = async (_, { id }: { id: number }, {}) => {
//   const getArticleById = await knx("articles").where({ id }).first();
//   return getArticleById;

  const article = await knx("articles").where({ id }).first();
  const category = await knx("category")
    .where({ id: article.category_id })
    .first();
  return {
    ...article,
    category,
  };
};
