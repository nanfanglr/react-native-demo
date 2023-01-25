import axios from 'axios';
import {BASE_URI} from './pathMap';

const instance = axios.create({
  baseURL: BASE_URI,
  timeout: 3000,
  headers: {'X-Custom-Header': 'foobar'},
});

//请求拦截处理
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

//返回拦截处理
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

export default {
  get: instance.get,
  post: instance.post,
  privatePost: (url: string, data = {}, options = {headers: {}}) => {
    const token = '';
    const headers = options.headers || {};
    return instance.post(url, data, {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers
      },
    });
  },
  privateGet: (url: string, data = {}, options = {headers: {}}) => {
    const token = '';
    const headers = options.headers || {};
    return instance.get(url, {
      ...options,
      params: data,
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers
      },
    });
  },
};
