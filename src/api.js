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
  formattedText = formattedText.replace(/^\d+\. (.*$)/gim, '<li>$1</li>');
  if (formattedText.includes('<li>')) {
    formattedText = formattedText.replace(/(<li>.*<\/li>)/g, '<ol>$1</ol>');
  }

  // Convert bullet list to <ul><li>
  formattedText = formattedText.replace(/^\* (.*$)/gim, '<li>$1</li>');
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
