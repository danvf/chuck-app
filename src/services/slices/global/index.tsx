import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultTheme, Theme } from "../../../styles/themes";

interface GlobalState {
  theme: Theme;
}

const initialState: GlobalState = {
  theme: defaultTheme,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = globalSlice.actions;

export default globalSlice.reducer;
