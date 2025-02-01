import { baseApi } from "../api/baseApi";


const alljobsearchApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllJobsSearch: builder.query({
            query: ({ page, limit, location, category, workPlace, experinceLavel, employmentType }) => {
                const queryParams = new URLSearchParams();

                if (location) queryParams.set('location', location);
                if (category) queryParams.set('category', category);
                if (workPlace) queryParams.set('workPlace', workPlace);
                if (experinceLavel) queryParams.set('experinceLavel', experinceLavel);
                if (employmentType) queryParams.set('employmentType', employmentType);
                queryParams.set('page', page);
                queryParams.set('limit', limit);

                return {
                    url: `/job/all-jobs?${queryParams.toString()}`,
                    method: "GET",
                };
            },
        }),
        getSingleJob: builder.query({
            query: (id) => ({
                url: `/job/single-job/${id}`,
                method: "GET",
            }),
        }),
    }),
});


export const { useGetAllJobsSearchQuery, useGetSingleJobQuery  } = alljobsearchApi;