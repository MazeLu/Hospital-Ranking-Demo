import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.linksciences.com/',
  timeout: 20000
});

// Add a request interceptor
instance.interceptors.request.use((config) => config, (error) => Promise.reject(error));

// Add a response interceptor
instance.interceptors.response.use((response) => response.data, (error) => {
  console.log('Error in axios response: ', error.message);
  return new Promise(() => { });
});

export default instance;
