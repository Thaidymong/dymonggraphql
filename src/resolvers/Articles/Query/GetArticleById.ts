import { knx } from "src/connections/CreateKnexConnections";

export const GetArticleById = async (_, { id }: { id: number }, { }) => {
    const getArticleById = await knx("article").where({ id }).first();
    return getArticleById;
}