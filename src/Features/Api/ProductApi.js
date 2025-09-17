import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    GetAllProduct: builder.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetAllProductQuery } = productApi;
