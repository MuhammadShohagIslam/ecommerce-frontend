import { baseApi } from "../../api/baseApi";

const userApiService = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSingleUser: build.query({
            query: ({ id }) => ({
                url: `admins/${id}`,
            }),
            providesTags: ["Users"],
        }),
        updateUser: build.mutation({
            query: ({data, id}) => ({
                url: `admins/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["Users"],
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetSingleUserQuery,
    useUpdateUserMutation,
} = userApiService;
