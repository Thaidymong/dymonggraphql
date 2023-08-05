import { knx } from "src/connections/CreateKnexConnections";
import { CategoryInput } from "src/types/Category";

export const UpdateCategory = async (_,{id,input}:{id:number, input: CategoryInput},{})=>{
    const {category_name} = input;
    const updateCategory  = await knx("category").update({category_name}).where({id});
    if(updateCategory){
        return true
    }
    else{
        return false
    }
}