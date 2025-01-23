import { baseApi } from "../api/baseApi";

const companyTypeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCompanyTypes: builder.query({
      query: (limit) => ({
        url: "/company-type",
        method: "GET",
        params: { limit },
      }),
    }),
  }),
});

export const { useGetCompanyTypesQuery } = companyTypeApi;
