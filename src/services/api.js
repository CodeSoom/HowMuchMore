import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fierce-beyond-91643.herokuapp.com',
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
