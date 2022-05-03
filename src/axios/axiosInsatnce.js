import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://currency-converter5.p.rapidapi.com/currency/convert',
});

axiosInstance.defaults.headers.common['X-RapidAPI-Host'] = 'currency-converter5.p.rapidapi.com';
axiosInstance.defaults.headers.common['X-RapidAPI-Key'] =
  'fdcfa2ab62msh445f31c0228cfadp185d57jsna26da70a6cd5';

export default axiosInstance;
