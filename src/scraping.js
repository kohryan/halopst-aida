const axios = require('axios');
const cheerio = require('cheerio');

const API_URL = 'https://webapi.bps.go.id/v1/api/domain/type/kabbyprov/prov/35/key/20b7b629ff223073385f5bfb3e22436f/';

async function fetchApiData() {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching API data:', error);
    return null;
  }
}

module.exports = { fetchApiData };