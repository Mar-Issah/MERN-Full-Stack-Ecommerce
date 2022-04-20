import { createSlice } from '@reduxjs/toolkit';

//https://redux-toolkit.js.org/tutorials/quick-start
//initial state. when the user logs into account user data is sent to server for auth and awaiting res so loginStart isFetching is true

//login succes, server return the data which is saved as currentUser

//if error then isError is true

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    isError: false,
  },
  reducers: {
    //actions
    loginStart: (state, _action) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.isError = false;
    },
    loginFailure: (state, _action) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

// action is be dispatched in component/page
//what ever passed in the action are payload
export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
