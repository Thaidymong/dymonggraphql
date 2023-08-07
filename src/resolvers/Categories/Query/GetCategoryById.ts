import { knx } from "src/connections/CreateKnexConnections";

export const GetCategoryById = async (_, { id }: { id: number }, { }) => {
    // const getCategoryById = await knx("category").where({ id }).first();
    // return getCategoryById;

    const category = await knx("category").where({id}).first();
    const articles = await knx("articles").where({category_id : category.id});

    return {
        ...category,
        articles,
    };
};