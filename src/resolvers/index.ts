import { CreateArticle } from "./Articles/Mutation/CreateArticle";
import { RemoveArticle } from "./Articles/Mutation/RemoveArticle";
import { UpdateArticle } from "./Articles/Mutation/UpdateArticle";
import { GetAllArticles } from "./Articles/Query/GetAllArticles";
import { GetArticleById } from "./Articles/Query/GetArticleById";
import { CreateCategory } from "./Categories/Mutation/CreateCategory";
import { RemoveCategory } from "./Categories/Mutation/RemoveCategory";
import { UpdateCategory } from "./Categories/Mutation/UpdateCategory";
import { GetAllCategory } from "./Categories/Query/GetAllCategory";
import { GetCategoryById } from "./Categories/Query/GetCategoryById";

export const Resolvers = {
    Query: {
        categories: GetAllCategory,
        category: GetCategoryById,
        articles: GetAllArticles,
        article : GetArticleById,
    },
    Mutation: {
        CreateCategory : CreateCategory,
        UpdateCategory : UpdateCategory,
        RemoveCategory : RemoveCategory,

        CreateArticle : CreateArticle,
        UpdateArticle : UpdateArticle,
        RemoveArticle : RemoveArticle,
    }
}
