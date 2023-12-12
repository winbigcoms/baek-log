import axios from 'axios';
import { ResponseDefaultAPIUtillCompare } from 'src/types/apis/default';

const defaultAPIInstance = axios.create({
  baseURL: 'http://168.138.52.179:8000'
});

export const defaultAPI = {
  utill: {
    compare: (data: FormData) =>
      defaultAPIInstance
        .post<ResponseDefaultAPIUtillCompare>('/utill/compare', data)
        .then(res => res.data)
  }
};
