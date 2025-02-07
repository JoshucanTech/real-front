import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getListings: builder.query({
      query: () => "/properties",
    }),
    getListingById: builder.query({
      query: (id) => `/properties/${id}`,
    }),
  }),
});

export const { useGetListingsQuery, useGetListingByIdQuery } = api;
