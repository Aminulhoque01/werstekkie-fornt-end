

import { baseApi } from "../api/baseApi";

export const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBlogs: builder.query({
            query: ({ page, limit }) => ({
                url: `/blog?page=${page}&limit=${limit}`,
                method: "GET",
            }),
        }),
        getSingleblog: builder.query({
            query: (id) => ({
                url: `/blog/${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetAllBlogsQuery, useGetSingleblogQuery } = blogApi;
