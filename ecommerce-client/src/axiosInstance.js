import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER;
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;
const TOKEN = '';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
//for when we have token
export const userRequest = axios.create({
  baseURL: BASE_URL,
  // header: { token: `Bearer ${TOKEN}` },
  header: { token: `${TOKEN}` },
});
