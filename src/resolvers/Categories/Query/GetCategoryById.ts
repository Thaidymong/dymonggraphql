import { knx } from "src/connections/CreateKnexConnections";

export const GetCategoryById = async (_, { id }: { id: number }, { }) => {
    const getCategoryById = await knx("category").where({ id }).first();
    return getCategoryById;
}