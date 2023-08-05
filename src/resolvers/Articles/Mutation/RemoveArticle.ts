import { knx } from "src/connections/CreateKnexConnections";

export const RemoveArticle = async(_,{id}:{id:number},{})=>{
    const removeArticle = await knx("carticle").del().where({id});
    if(removeArticle){
        return true;
    }else {
        return false;
    }
}