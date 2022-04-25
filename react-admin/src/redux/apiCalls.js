import { loginFailure, loginStart, loginSuccess } from './adminUserSlice';
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from './productSlice';
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

//make an put/update request to update the server. id and product should be retrived from res.data for dispatch
export const updateProduct = async (dispatch, id, product) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${id}`);
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

//if successful take the res.data as payload and dispatch
export const addProduct = async (dispatch, product) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.post(`/products`, { product });
    dispatch(deleteProductSuccess(res.data));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};
