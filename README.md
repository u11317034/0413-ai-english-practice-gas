# 0413-ai-english-practice-gas
多媒體處理技術與應用 0413 ai english practice gas
# 🗣️ AI 英語口說教練 (基於 Gemini API)

這是一個使用 Google Apps Script (GAS) 與 Google Gemini 2.5 Flash API 開發的輕量級網頁應用程式。提供 10 種生活與職場情境，自動生成由淺入深的英文句子，並具備語音合成 (TTS) 示範與語音辨識 (Speech Recognition) 評分功能。

## ✨ 功能特色
* **完全免費託管**：基於 Google Apps Script，不需自建伺服器。
* **AI 即時生成**：每次練習的句子皆由 Gemini 動態產生，具備 5 個難度等級。
* **即時發音比對**：視覺化標示正確與錯誤的發音單字。

## 🚀 如何部署到你自己的 Google 雲端硬碟

1. 前往 [Google Apps Script](https://script.google.com/) 並點擊「新專案」。
2. 將本專案中的 `Code.gs` 與 `index.html` 內容分別複製貼上到你的專案中。
3. **設定 API Key (非常重要)**：
   * 前往 [Google AI Studio](https://aistudio.google.com/) 取得免費的 Gemini API Key。
   * 在 GAS 編輯器左側點擊 **「專案設定 (⚙️)」**。
   * 找到 **「指令碼屬性」**，新增屬性：`GEMINI_API_KEY`，並將你的 Key 填入值中。
4. 點擊右上角 **「部署」** > **「新增部署作業」**。
5. 類型選擇 **「網頁應用程式 (Web App)」**。
   * 執行身分：`我`
   * 誰可以存取：`所有人 (Anyone)`
6. 點擊「部署」，授權後即可獲得專屬的應用程式網址！

## 🛠️ 技術棧
* 後端：Google Apps Script, Gemini API
* 前端：HTML, CSS, Vanilla JavaScript, Web Speech API

## 線上體驗網址：
* https://script.google.com/macros/s/AKfycbxS9iexqb6BFfRmPGNnY5ohRDvE6pGuIPLendxDKL2Ntz6NeB3Luh2RU3ivx3ISMOoW2w/exec
