import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chuckApi = createApi({
  reducerPath: "chuckApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.chucknorris.io/jokes/" }),
  endpoints: (builder) => ({
    getCategories: builder.query<string[], void>({
      query: () => `categories`,
    }),
    getRandomJoke: builder.query<any, string>({
      query: (category: string) => `random?category={${category}}`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetRandomJokeQuery } = chuckApi;
