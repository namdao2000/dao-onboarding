import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';

export const instance = axios.create({
  headers: {
    'content-type': 'application/json',
  },
});

export const axiosWrapper = async (
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  data?: any,
): Promise<AxiosResponse | undefined> => {
  try {
    if (process.env.NODE_ENV === 'development') {
      console.log('network call made:', method, url, data);
    }
    if (method === 'get' || method === 'delete') {
      return await instance[method](url);
    }
    return await instance[method](url, data);
  } catch (e) {
    const { message, status } = (e as AxiosError).response?.data;
    if (message && status) {
      toast.error(`${status}: ${message}`);
    } else {
      toast.error(
        '500: An unknown error has occurred while processing your request. Please try again later.',
      );
    }
  }
};
