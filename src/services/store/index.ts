import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { chuckApi } from "../api/chuck";
import { globalSlice } from "../slices/global";

export const store = configureStore({
  reducer: {
    [chuckApi.reducerPath]: chuckApi.reducer,
    global: globalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chuckApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
