import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  posts: [],
  admin:false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setAdmin:(state,action)=>{
        state.admin=action.admin;
    },
    setExperiments: (state, action) => {
      state.posts = action.payload.posts;
    },
    
  },
});

export const { setLogin, setLogout, setAdmin, setExperiments } =
  authSlice.actions;
export default authSlice.reducer;