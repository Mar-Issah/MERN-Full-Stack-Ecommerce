import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER;

const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDM0NzM5YWViNjVjMmNiNjFkNGRhYiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTAzMzIxMDIsImV4cCI6MTY1MDU5MTMwMn0.ac-aj5s_nV87useuOOupzw0dzT6VYN4-PHFuuZMvumA';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
//for when we have token
export const userRequest = axios.create({
  baseURL: BASE_URL,
  // header: { token: `Bearer ${TOKEN}` },
  headers: { token: `${TOKEN}` },
});
