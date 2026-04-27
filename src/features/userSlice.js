import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ism: "Frontend"
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.ism = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;