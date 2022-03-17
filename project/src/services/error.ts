import request from 'axios';
import { toast } from 'react-toastify';

export const handleError = (error: unknown): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  toast.error(error.response?.data?.error ?? 'Unknown error');
};
