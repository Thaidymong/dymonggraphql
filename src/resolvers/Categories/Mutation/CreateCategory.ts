import { knx } from "src/connections/CreateKnexConnections";
import { CategoryInput } from "src/types/Category";

export const CreateCategory = async(_,{input}:{input:CategoryInput},{})=>{
    const {category_name}= input;
    const createCategory = await knx("category").insert({category_name})
    if(createCategory){
        return true;

    }else{
        return false;
    }
}