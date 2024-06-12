import { GoogleGenerativeAI } from '@google/generative-ai';


const apiKey = 'AIzaSyBm04Zw9BAbV-B-DhlAkEU2lawDC70FIAs';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

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

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

const websites = ["https://jatim.bps.go.id","https://pacitankab.bps.go.id","https://ponorogokab.bps.go.id","https://trenggalekkab.bps.go.id","https://tulungagungkab.bps.go.id","https://blitarkab.bps.go.id","https://kedirikab.bps.go.id","https://malangkab.bps.go.id","https://lumajangkab.bps.go.id","https://jemberkab.bps.go.id","https://banyuwangikab.bps.go.id","https://bondowosokab.bps.go.id","https://situbondokab.bps.go.id","https://probolinggokab.bps.go.id","https://pasuruankab.bps.go.id","https://sidoarjokab.bps.go.id","https://mojokertokab.bps.go.id","https://jombangkab.bps.go.id","https://nganjukkab.bps.go.id","https://madiunkab.bps.go.id","https://magetankab.bps.go.id","https://ngawikab.bps.go.id","https://bojonegorokab.bps.go.id","https://tubankab.bps.go.id","https://lamongankab.bps.go.id","https://gresikkab.bps.go.id","https://bangkalankab.bps.go.id","https://sampangkab.bps.go.id","https://pamekasankab.bps.go.id","https://sumenepkab.bps.go.id","https://kedirikota.bps.go.id","https://blitarkota.bps.go.id","https://malangkota.bps.go.id","https://probolinggokota.bps.go.id","https://pasuruankota.bps.go.id","https://mojokertokota.bps.go.id","https://madiunkota.bps.go.id","https://surabayakota.bps.go.id","https://batukota.bps.go.id"];

const systemPrompt = {
  role: 'system',
  content: 
  `Kamu adalah Ning Aida, AI Data Assistant BPS Provinsi Jawa Timur yang siap membantu Anda menyediakan data dan informasi statistik seputar BPS.

  BPS membuka pelayanan konsultasi data dari hari Senin s.d. Kamis, pukul 08.00-15.30 dan hari Jumat, pukul 08.00–16.00

  Produk statistik BPS meliputi tabel data statistik, data mikro, publikasi statistik, dan Berita Resmi Statistik.

  Jika ada yang minta data atau minta diberikan data, arahkan ke:
  - Tabel data statistik arahkan ke: https://jatim.bps.go.id/searchengine/result.html
  - Data mikro, beli data mentah, data mentah arahkan ke: https://silastik.bps.go.id/v3/index.php/site/index_internal/#tta
  - Publikasi statistik arahkan ke: https://jatim.bps.go.id/publikasi
  - Berita Resmi Statistik arahkan ke: https://jatim.bps.go.id/pressrelease.html 

  Berikut website BPS di Jawa Timur yang bisa menjadi rujukan dalam memperoleh produk statistik BPS:
  ${websites.map((url, index) => `${index + 1}. ${url}`).join('\n')}

  Selain website, data BPS Jawa Timur dapat diperoleh melalui aplikasi Mister J-Statistik Jatim yang dapat didownload melalui Google Playstore di https://play.google.com/store/apps/details?id=com.bps_jatim_3500.statistik_jatim&hl=id

  di akhir percakapan, tawarkan pengunjung untuk mengisi Survei Kebutuhan Data sebagai bentuk peningkatan layanan BPS Jawa Timur di link: https://skd.bps.go.id/SKD2024/web/entri/responden/blok1?token=D8vpKU5RZ2XIjNgKS03zSuCnQ_wL8Sd-9jXKDkMNkDaSDytXhq7WHxZUtD5xCgfykodltGTsKC0g6zS5XqIKF2SF3PY-HctaucbQ
  `
};

function formatToHtml(text) {
  let formattedText = text;

  // Convert headers (Markdown syntax) to <h1>, <h2>, etc.
  formattedText = formattedText.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
  formattedText = formattedText.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
  formattedText = formattedText.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
  formattedText = formattedText.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  formattedText = formattedText.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  formattedText = formattedText.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Convert **bold** to <strong>
  formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Convert *italic* to <em>
  formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Convert numbered list to <ol><li>
  formattedText = formattedText.replace(/^\d+\.\s+(.*)$/gim, '<li>$1</li>');
  if (formattedText.includes('<li>')) {
    formattedText = formattedText.replace(/(<li>.*<\/li>)/g, '<ol>$1</ol>');
  }

  // Convert bullet list to <ul><li>
  formattedText = formattedText.replace(/^\*\s+(.*)$/gim, '<li>$1</li>');
  if (formattedText.includes('<li>')) {
    formattedText = formattedText.replace(/(<li>.*<\/li>)/g, '<ul>$1></ul>');
  }

  // Convert URLs to <a href="...">...</a>
  formattedText = formattedText.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Convert Markdown tables to HTML tables
  formattedText = formattedText.replace(/(\|.*?\|.*?\|\n)(\|[-|: ]+\|\n)((\|.*?\|.*?\|\n)+)/g, (match, headerLine, separatorLine, bodyLines) => {
    const headers = headerLine.trim().split('|').slice(1, -1).map(header => `<th>${header.trim()}</th>`).join('');
    const rows = bodyLines.trim().split('\n').map(rowLine => {
      const cells = rowLine.trim().split('|').slice(1, -1).map(cell => `<td>${cell.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    return `<table><tr>${headers}</tr>${rows}</table>`;
  });
  
  return formattedText;
}

export async function getAiResponse(messages) {
  const apiData = await fetchApiData(); // Panggil fetchApiData
  const websiteContent = await fetchWebsiteContent();

  const parts = [{ role: 'system', content: 'Gunakan informasi berikut sebagai konteks:\n' + apiData + websiteContent }, 
    systemPrompt, ...messages].map(message => ({ text: message.content }));

  try {
    const result = await model.generateContent({
      contents: [{ role: 'user', parts }],
      generationConfig,
    });

    const formattedResponse = formatToHtml(result.response.text());
    return formattedResponse;
  } catch (error) {
    console.error('Error fetching AI response:', error);
    return 'Maaf, saya sudah mencapai limit. Tunggu satu menit';
  }
}

export async function getChatSummary(messages) {
  const summaryPrompt = {
    role: 'system',
    content: 'Buat ringkasan judul dari topik yang dibahas. Judul harus singkat, jelas, dan tepat sasaran. Hanya 7 kata, tidak boleh lebih dari 7 kata. Kurang dari 7 kata diutamakan'
  };

  const parts = [{ role: 'system', content: 'Berikan ringkasan yang sangat singkat dan tepat.' }, ...messages, summaryPrompt].map(message => ({ text: message.content }));

  try {
    const result = await model.generateContent({
      contents: [{ role: 'user', parts }],
      generationConfig,
    });

    let summary = result.response.text().trim();

    // Validate and truncate the summary to 7 words if necessary
    const words = summary.split(' ');
    if (words.length > 7) {
      summary = words.slice(0, 7).join(' ') + '...';
    }

    return summary;
  } catch (error) {
    console.error('Error fetching chat summary:', error);
    return 'Ringkasan Percakapan';
  }
}