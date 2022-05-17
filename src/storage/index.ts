import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./App.slice";
import AuthSlice from "./Auth.slice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    app: AppSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
