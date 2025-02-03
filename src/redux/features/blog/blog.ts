

import { baseApi } from "../api/baseApi";

export const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBlogs: builder.query({
            query: ({ page, limit }) => ({
                url: `/blog?page=${page}&limit=${limit}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetAllBlogsQuery } = blogApi;
