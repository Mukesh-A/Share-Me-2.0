import { createSlice, configureStore } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, navigate: "home" },
  reducers: {
    // here state is initialState
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    nav(state, action) {
      const navItem = action.payload;
      state.navigate = navItem;
    },
  },
});

export const authActions = authSlice.actions;
export const store = configureStore({ reducer: authSlice.reducer });
