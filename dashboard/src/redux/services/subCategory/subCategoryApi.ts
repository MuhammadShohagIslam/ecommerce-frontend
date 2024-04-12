import { baseApi } from "../../api/baseApi";
import { ISubCategory } from "../../../types/sub-category.type";

const subCategoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSubCategories: build.query({
            query: (queryParams: string) => ({
                url: `sub-categories?${queryParams}`,
                method: "GET",
            }),
        }),
        createSubCategory: build.mutation({
            query: (payload: ISubCategory) => ({
                url: "sub-categories",
                method: "POST",
                body: payload,
            }),
        }),
        updateSubCategory: build.mutation({
            query: (payload: ISubCategory) => ({
                url: "sub-categories",
                method: "PATCH",
                body: payload,
            }),
        }),
        removedSubCategory: build.mutation({
            query: (payload: string) => ({
                url: `sub-categories/${payload}`,
                method: "DELETE",
            }),
        }),
       
    }),
    overrideExisting: false,
});

export const {
    useCreateSubCategoryMutation,
    useGetSubCategoriesQuery,
    useRemovedSubCategoryMutation,
    useUpdateSubCategoryMutation,
} = subCategoryApi;
