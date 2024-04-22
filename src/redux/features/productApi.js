import { apiSlice } from "../api/apiSlice";

const NEXT_PUBLIC_BACKEND_URL =  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:7000/api"

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `${NEXT_PUBLIC_BACKEND_URL}/product/all`,
      providesTags:['Products']
    }),
    getProductType: builder.query({
      query: ({ type, query }) => `${NEXT_PUBLIC_BACKEND_URL}/product/${type}?${query}`,
      providesTags:['ProductType']
    }),
    getOfferProducts: builder.query({
      query: (type) => `${NEXT_PUBLIC_BACKEND_URL}/product/offer?type=${type}`,
      providesTags:['OfferProducts']
    }),
    getPopularProductByType: builder.query({
      query: (type) => `${NEXT_PUBLIC_BACKEND_URL}/product/popular/${type}`,
      providesTags:['PopularProducts']
    }),
    getTopRatedProducts: builder.query({
      query: () => `${NEXT_PUBLIC_BACKEND_URL}/product/top-rated`,
      providesTags:['TopRatedProducts']
    }),
    // get single product
    getProduct: builder.query({
      query: (id) => `${NEXT_PUBLIC_BACKEND_URL}/product/single-product/${id}`,
      providesTags: (result, error, arg) => [{ type: "Product", id: arg }],
      invalidatesTags: (result, error, arg) => [
        { type: "RelatedProducts", id:arg },
      ],
    }),
    // get related products
    getRelatedProducts: builder.query({
      query: (id) => `${NEXT_PUBLIC_BACKEND_URL}/product/related-product/${id}`,
      providesTags: (result, error, arg) => [
        { type: "RelatedProducts", id: arg },
      ],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductTypeQuery,
  useGetOfferProductsQuery,
  useGetPopularProductByTypeQuery,
  useGetTopRatedProductsQuery,
  useGetProductQuery,
  useGetRelatedProductsQuery,
} = productApi;
