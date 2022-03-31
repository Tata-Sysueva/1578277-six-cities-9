import request from 'axios';
import {ErrorType} from '../types/error';
import {HTTP_CODE} from '../const';
import {toast} from 'react-toastify';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        toast.error(`${response.data.error} Something went wrong. Try again`);
        break;
      case HTTP_CODE.UNAUTHORIZED:
        toast.info('You need to login!');
        break;
      case HTTP_CODE.NOT_FOUND:
        toast.error(`${response.data.error} Something went wrong. Try again`);
        break;
      default:
        toast (`Unknown error: ${response.data.error} Try again`);
    }
  }
};
