import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'antd/dist/antd.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BASE_URL} from'./constant'
import axios from "axios";

//any global headers go here.
let headers = {
  // Accept: "text/plain",
  Accept: "application/json",

};
// create axios instance
export const Axios = axios.create({
  baseURL: BASE_URL + "/",
  headers: headers,
});


// check if we have a token and then append it to the axios instance
// Axios.interceptors.request.use(
//   config => {
//       const token = getToken();
//       console.log(`INDEX.js TOKEN: ${token.access_token}`)
//       if (token) {
//           // config.headers['Authorization'] = 'Bearer ' + token.access_token;
//           config.headers['Authorization'] = 'Bearer ' + token.access_token;
//       }
//       return config;
//   },
//   error => {
//       Promise.reject(error);
//   }
// )




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
