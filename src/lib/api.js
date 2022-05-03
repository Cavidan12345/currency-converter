import axios from '../axios/axiosInsatnce';

export const getCurrency = ({ params }) => {
  return axios.get('', {
    params,
  });
};
