import axios from 'axios';

const api = axios.create({
  baseURL: 'https://guarded-depths-20404.herokuapp.com/',
});

export async function fetchApartments({ apartmentCategory }) {
  const { data: { apartments } } = await api.get('/apartment', {
    params: {
      apartmentCategory,
    },
  });

  return apartments;
}

// TODO : TO BE DELETED SOON
export const dummy = {};
