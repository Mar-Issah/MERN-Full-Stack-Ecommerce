import { loginFailure, loginStart, loginSuccess } from './adminUserSlice';
import { getProductFailure, getProductStart, getProductSuccess, deleteProductStart, deleteProductSuccess, deleteProductFailure } from './productSlice';
import { publicRequest, userRequest } from '../axiosInstance';

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

// get request and don't need to send a payload
//call fxn in productList page
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get('/products');
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

//to delete a product
export const deleteProduct = async (dispatch, id) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(res.data));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};
