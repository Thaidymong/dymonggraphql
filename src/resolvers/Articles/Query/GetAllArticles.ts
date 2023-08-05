import { knx } from "src/connections/CreateKnexConnections"

export const GetAllArticles = async()=>{
    const articles = await knx("article");
    return articles;
}