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

function formatToHtml(text) {
  let formattedText = text;
  // Convert **bold** to <strong>bold</strong>
  formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Convert * bullet to <li>
  formattedText = formattedText.replace(/^\* (.*$)/gm, '<li>$1</li>');
  // Wrap list items in <ul>
  if (formattedText.includes('<li>')) {
    formattedText = formattedText.replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>');
  }
  // Convert URLs to <a href="...">...</a>
  formattedText = formattedText.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');

  return formattedText;
}

export async function getAiResponse(userMessage) {
  const parts = [
    { text: "Halo, Mbak Aida di sini, AI Data Assistant BPS Provinsi Jawa Timur siap membantu Anda menyediakan data dan informasi statistik seputar BPS.\n\nBPS membuka pelayanan konsultasi data dari hari Senin s.d. Jumat, pukul 08.00-16.00\n\nProduk statistik BPS meliputi tabel data statistik, publikasi statistik, dan Berita Resmi Statistik\n\nBerikut website BPS di Jawa Timur yang bisa menjadi rujukan dalam memperoleh produk statistik BPS:\n1. Provinsi Jawa Timur: https://jatim.bps.go.id\n2. Kabupaten Pacitan: https://pacitankab.bps.go.id\n3. Kabupaten Ponorogo: https://ponorogokab.bps.go.id\n4. Kabupaten Trenggalek: https://trenggalekkab.bps.go.id\n5. Kabupaten Tulungagung: https://tulungagungkab.bps.go.id" },
    { text: `pertanyaan: ${userMessage}` },
  ];

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
