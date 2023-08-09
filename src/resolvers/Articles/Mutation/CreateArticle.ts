import { knx } from "src/connections/CreateKnexConnections";
import { ArticleInput } from "src/types/Article";

export const CreateArticle = async(_,{input}:{input:ArticleInput},{})=>{
    const {title,summary,description,image,category_id}= input;
    const createArticle = await knx("articles").insert({
        title,
        summary,
        description,
        image,
        category_id
    })
    if(createArticle){
        return true;

    }else{
        return false;
    }
}