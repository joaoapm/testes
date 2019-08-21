import axios from 'axios';

const client = axios.create({
  baseURL: '/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default client; 