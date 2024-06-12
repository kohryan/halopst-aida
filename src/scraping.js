const axios = require('axios');
const cheerio = require('cheerio');

const API_URL = 'https://webapi.bps.go.id/v1/api/domain/type/kabbyprov/prov/35/key/20b7b629ff223073385f5bfb3e22436f/';
const BASE_URL = 'https://jatim.bps.go.id';

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

async function fetchWebsiteContent() {
  try {
    const response = await axios.get(BASE_URL);
    const html = response.data;
    const $ = cheerio.load(html);
    let content = '';

    $('section').each((i, element) => {
      content += $(element).text() + '\n';
    });

    return content;
  } catch (error) {
    console.error('Error fetching website content:', error);
    return '';
  }
}

module.exports = { fetchApiData, fetchWebsiteContent };
