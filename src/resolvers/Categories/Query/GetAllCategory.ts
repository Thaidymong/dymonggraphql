import { knx } from "src/connections/CreateKnexConnections";

export const GetAllCategory = async()=>{
    // const categories= await knx("category");
    // return categories;

    const categories = await knx("category");
    const articles   = await knx("articles");
    
    return categories.map((category) => {
        const ArticlesItem = articles.filter((article) => article.category_id === category.id);
    
        return {
          ...category,
          articles: ArticlesItem,
        };
    });
};