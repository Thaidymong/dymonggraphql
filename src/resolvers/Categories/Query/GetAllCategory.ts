import { knx } from "src/connections/CreateKnexConnections";

export const GetAllCategory = async()=>{
    const categories= await knx("category");
    return categories;
}