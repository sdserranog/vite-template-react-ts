import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://fakerapi.it/api/v1/books',
})

export default instance
