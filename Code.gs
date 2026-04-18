// 從系統屬性中安全地讀取 API Key，這樣直接開源也不會洩漏！
const GEMINI_API_KEY = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');

function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('2026 AI 英語教練')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getSentences(theme) {
  const MODEL_NAME = 'gemini-2.5-flash'; 
  const url = `https://generativelanguage.googleapis.com/v1/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;

  // 強化後的 Prompt，確保難度階梯明顯
  const prompt = `You are an expert English teacher. 
  Topic: "${theme}". 
  Task: Generate 5 practical sentences for daily use, strictly following these difficulty levels:
  Level 1: 2-3 words (Very easy, e.g., "I am hungry.")
  Level 2: 4-6 words (Easy, e.g., "Where is the bus stop?")
  Level 3: 7-9 words (Medium, e.g., "I would like to book a table for two.")
  Level 4: 10-13 words (Challenging, e.g., "If it rains tomorrow, we might have to cancel the picnic.")
  Level 5: 14+ words (Advanced, including relative clauses, e.g., "The person who called you yesterday left a message saying that the meeting has been rescheduled to Friday.")
  
  Return ONLY a raw JSON array of strings. Do not include level labels or markdown.
  Format: ["sentence1", "sentence2", "sentence3", "sentence4", "sentence5"]`;

  try {
    const payload = { contents: [{ parts: [{ text: prompt }] }] };
    const options = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch(url, options);
    const resJson = JSON.parse(response.getContentText());

    if (resJson.error) throw new Error(resJson.error.message);

    const rawText = resJson.candidates[0].content.parts[0].text;
    const jsonMatch = rawText.match(/\[.*\]/s);
    return JSON.parse(jsonMatch[0]);

  } catch (e) {
    throw new Error("出題失敗，請檢查 API 或網路: " + e.toString());
  }
}
