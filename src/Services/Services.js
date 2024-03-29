import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40776589-fc207332ebf49f582032298e8';

export const onDataSearch = async (currentPage, searchQuery) => {
  const { data } = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: searchQuery,
      page: currentPage ?? 1,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return data;
};
