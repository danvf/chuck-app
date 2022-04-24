import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { chuckApi } from "../api/chuck";

export const store = configureStore({
  reducer: {
    [chuckApi.reducerPath]: chuckApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chuckApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const selectJokes = (state: RootState) => state.jokes;
