import {  createSlice } from '@reduxjs/toolkit'


export const themeSlice = createSlice({
  name: 'slice',
  initialState:{
      user:null,
      supervisor:null,
      usersupervisor:null,
      supervisorstudents:null
  },
  reducers: {
    login: (state,action) => {
      state.user =action.payload;
    },
    logout:(state) => {
      state.user = null;
    },
    loginSupervisor: (state,action) => {
      state.supervisor =action.payload;
    },
    logoutSupervisor:(state) => {
      state.supervisor = null;
    },
    setSupervisorstudents:(state,action) => {
      state.supervisorstudents = action.payload
    },
    setSupervisor:(state,action) => {
      state.usersupervisor = action.payload
    }
  },
 
});

export const { login, logout,setSupervisor,logoutSupervisor,loginSupervisor,setSupervisorstudents } = themeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.slice.user;
export const selectSupervisor = (state) => state.slice.supervisor;
export const selectUserSupervisor = (state) => state.slice.usersupervisor;
export const selectSupervisorStudents = (state) => state.slice.supervisorstudents;



export default themeSlice.reducer;
