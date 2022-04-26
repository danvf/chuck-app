import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chuckApi = createApi({
  reducerPath: "chuckApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.chucknorris.io/jokes/" }),
  endpoints: (builder) => ({
    getChuckCategories: builder.query<string[], void>({
      query: () => `categories`,
    }),
    getChuckRandomJoke: builder.query<string, string>({
      query: (category: string) => `random?category=${category}`,
      transformResponse: (response: any) => {
        return response.value;
      },
    }),
  }),
});

export const {
  useGetChuckCategoriesQuery,
  useGetChuckRandomJokeQuery,
} = chuckApi;
