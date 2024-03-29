import axios from 'axios';

const getCountries = async (country) => {
  try {
    const response = await axios.get(
      `https://disease.sh/v3/covid-19/countries/${country}`,
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export default getCountries;
