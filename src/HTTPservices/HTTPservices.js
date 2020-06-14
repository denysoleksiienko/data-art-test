import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
  headers: { 'Content-Type': 'application/json' },
});

export const HTTPservices = {
  getAllCountries: async () => {
    const response = await instance.get(`/all`);
    return response.data;
  },

  getCountryByRegion: async (region) => {
    const response = await instance.get(`/region/${region}`);
    return response.data;
  },
};
