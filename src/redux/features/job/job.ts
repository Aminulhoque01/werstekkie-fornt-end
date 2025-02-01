// import { baseApi } from "../api/baseApi";


// const jobApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllJobs: builder.query({
//       query: ({page, limit }) => ({
//         url: `/job/all-jobs?page=${page}&limit=${limit}`,
//         method: "GET",
//       }),
//     }),
//   }),
// });

// export const { useGetAllJobsQuery } = jobApi;


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
    }),
});

export const { useGetAllJobsSearchQuery } = alljobsearchApi;