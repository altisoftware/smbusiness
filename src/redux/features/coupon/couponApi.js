import { apiSlice } from "@/redux/api/apiSlice";



export const authApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    // get offer coupon
    getOfferCoupons: builder.query({
      query: () => `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:7000/api"}/coupon`,
      providesTags:['Coupon'],
      keepUnusedDataFor: 600,
    }),
  }),
});

export const { useGetOfferCouponsQuery } = authApi;
