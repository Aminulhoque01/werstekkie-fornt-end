import { baseApi } from '../api/baseApi';

const faqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFaq: builder.query({
      query: ({ getState }) => {
        const token = getState()?.auth?.token; // Get token from Redux state
        return {
          url: '/faq/faq',
          method: 'GET',
          headers: token ? { Authorization: `Bearer ${token}` } : {}, // Pass auth headers
        };
      },
    }),
  }),
});

export const { useGetFaqQuery } = faqApi;
