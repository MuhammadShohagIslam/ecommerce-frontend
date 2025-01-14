import { baseApi } from "../../api/baseApi";

const authApiService = baseApi.injectEndpoints({
    endpoints: (build) => ({
        register: build.mutation({
            query: (payload) => ({
                url: "auth/register",
                method: "POST",
                body: payload,
            }),
        }),
        login: build.mutation({
            query: (payload) => ({
                url: `auth/login`,
                method: "POST",
                body: payload,
            }),
        }),
        forgotPassword: build.mutation({
            query: (payload) => ({
                url: `auth/forgot-password`,
                method: "PATCH",
                body: payload,
            }),
        }),
        changePassword: build.mutation({
            query: (payload) => ({
                url: `auth/change-password`,
                method: "PATCH",
                body: payload,
            }),
        }),
        updateProfile: build.mutation({
            query: ({ id, data }) => ({
                url: `users/${id}`,
                method: "PATCH",
                body: data,
            }),
        }),
        refreshToken: build.mutation({
            query: (payload) => ({
                url: `auth/refresh-token`,
                method: "POST",
                body: payload,
            }),
        }),
    }),
    overrideExisting: false,
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useForgotPasswordMutation,
    useChangePasswordMutation,
    useUpdateProfileMutation,
    useRefreshTokenMutation,
} = authApiService;
