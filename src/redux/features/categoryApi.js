import { apiSlice } from "../api/apiSlice";

const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:7000/api"

export const categoryApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (data) => ({
        url:  `${NEXT_PUBLIC_BACKEND_URL}/category/add`,
        method: "POST",
        body: data,
      }),
    }),
    getShowCategory: builder.query({
      query: () => `${NEXT_PUBLIC_BACKEND_URL}/category/show`
    }),
    getProductTypeCategory: builder.query({
      query: (type) => `${NEXT_PUBLIC_BACKEND_URL}/category/show/${type}`
    }),
  }),
});

export const {
 useAddCategoryMutation,
 useGetProductTypeCategoryQuery,
 useGetShowCategoryQuery,
} = categoryApi;
