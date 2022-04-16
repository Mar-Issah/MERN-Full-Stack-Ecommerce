import { loginFailure, loginStart, loginSuccess } from './userSliceRedux';
import { publicRequest } from '../axiosInstance';

// the dispatch can also be made directly in the page/component
//loginStart and loginFailure logic can be used to show a loader
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
