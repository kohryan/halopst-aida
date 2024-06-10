import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AIzaSyBm04Zw9BAbV-B-DhlAkEU2lawDC70FIAs';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

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
1. Provinsi Jawa Timur: ${websites[0]}
2. Kabupaten Pacitan: ${websites[1]}
3. Kabupaten Ponorogo: ${websites[2]}
4. Kabupaten Trenggalek: ${websites[3]}
5. Kabupaten Tulungagung: ${websites[4]}
6. Kabupaten Blitar: ${websites[5]}
7. Kabupaten Kediri: ${websites[6]}
8. Kabupaten Malang: ${websites[7]}
9. Kabupaten Lumajang: ${websites[8]}
10. Kabupaten Jember: ${websites[9]}
11. Kabupaten Banyuwangi: ${websites[10]}
12. Kabupaten Bondowoso: ${websites[11]}
13. Kabupaten Situbondo: ${websites[12]}
14. Kabupaten Probolinggo: ${websites[13]}
15. Kabupaten Pasuruan: ${websites[14]}
16. Kabupaten Sidoarjo: ${websites[15]}
17. Kabupaten Mojokerto: ${websites[16]}
18. Kabupaten Jombang: ${websites[17]}
19. Kabupaten Nganjuk: ${websites[18]}
20. Kabupaten Madiun: ${websites[19]}
21. Kabupaten Magetan: ${websites[20]}
22. Kabupaten Ngawi: ${websites[21]}
23. Kabupaten Bojonegoro: ${websites[22]}
24. Kabupaten Tuban: ${websites[23]}
25. Kabupaten Lamongan: ${websites[24]}
26. Kabupaten Gresik: ${websites[25]}
27. Kabupaten Bangkalan: ${websites[26]}
28. Kabupaten Sampang: ${websites[27]}
29. Kabupaten Pamekasan: ${websites[28]}
30. Kabupaten Sumenep: ${websites[29]}
31. Kota Kediri: ${websites[30]}
32. Kota Blitar: ${websites[31]}
33. Kota Malang: ${websites[32]}
34. Kota Probolinggo: ${websites[33]}
35. Kota Pasuruan: ${websites[34]}
36. Kota Mojokerto: ${websites[35]}
37. Kota Madiun: ${websites[36]}
38. Kota Surabaya: ${websites[37]}
39. Kota Batu: ${websites[38]}

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
    formattedText = formattedText.replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>');
  }

  // Convert URLs to <a href="...">...</a>
  formattedText = formattedText.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');

  return formattedText;
}

export async function getAiResponse(messages) {
  const parts = [systemPrompt, ...messages].map(message => ({ text: message.content }));

  try {
    const result = await model.generateContent({
      contents: [{ role: 'user', parts }],
      generationConfig,
    });

    const formattedResponse = formatToHtml(result.response.text());
    return formattedResponse;
  } catch (error) {
    console.error('Error fetching AI response:', error);
    return 'Sorry, there was an error getting the response.';
  }
}

export async function getChatSummary(messages) {
  const parts = [systemPrompt, ...messages, {
    role: 'user',
    content: 'Tolong berikan ringkasan judul dari topik yang dibahas. Tidak boleh lebih dari 1 kalimat. Dalam 1 kalimat maksimal wajib 7 kata saja.'
  }].map(message => ({ text: message.content }));

  try {
    const result = await model.generateContent({
      contents: [{ role: 'user', parts }],
      generationConfig,
    });

    return result.response.text();
  } catch (error) {
    console.error('Error fetching chat summary:', error);
    return 'Conversation Summary';
  }
}
