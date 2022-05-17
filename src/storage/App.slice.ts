import { createSlice } from "@reduxjs/toolkit";

export interface App {
  id: number;
  name: string;
  owner: string;
}

const appSLice = createSlice({
  name: "app",
  initialState: null as App[] | null,
  reducers: {
    add: (state, action) => {
      if (state === null) {
        state = [];
      }
      state.push(action.payload);
    },
  }
})

export const { add } = appSLice.actions
export default appSLice.reducer
