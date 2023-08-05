import { knx } from "src/connections/CreateKnexConnections";
import { ArticleInput } from "src/types/Article";

export const UpdateArticle = async (_,{id,input}:{id:number, input: ArticleInput},{})=>{
    const {title,summary,description,image,category_id}= input;
    const updateArticle  = await knx("article").update({
        title,
        summary,
        description,
        image,
        category_id
    }).where({id});
    if(updateArticle){
        return true
    }
    else{
        return false
    }
}