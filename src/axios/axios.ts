/*
 * @Description: axios
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-10-11 13:59:06
 * @LastEditors: Jensen
 * @LastEditTime: 2019-10-11 21:03:16
 */
import axios from 'axios';
import qs from 'qs';

const BASE_URL = 'http://192.168.1.144:8088/';

interface Response {
  config: any,
  data: any,
  headers: any,
  request: any,
  status: number,
  statusText: string,
}

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 10000;

axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  Promise.reject(error);
})

export const httpGet = (url = '', params = {}) => {
  return new Promise<Response | any>((resolve, reject) => {
    axios.get(url, {
      params
    }).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error);
    })
  })
}

export const httpPost = (url = '', params = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
    .then(res => {
      resolve(res);
    })
    .catch(error => {
      reject(error);
    })
  })
}