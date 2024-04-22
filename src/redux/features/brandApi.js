import { apiSlice } from "../api/apiSlice";

export const brandApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    getActiveBrands: builder.query({
      query: () => `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:7000/api"}/brand/active`
    }),
  }),
});

export const {
 useGetActiveBrandsQuery
} = brandApi;
