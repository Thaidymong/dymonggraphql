import { knx } from "src/connections/CreateKnexConnections";

export const GetAllArticles = async () => {
  const articles = await knx("articles");
  const categories = await knx("category");

  return articles.map((item) => {
    const category = categories.find((cate) => cate.id === item.category_id);
    return {
      ...item,
      category,
    };
  });
};
