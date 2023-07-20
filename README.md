# tokenize_test

技術棧
React Native：用於構建跨平台移動應用程序的UI框架。
Redux：用於狀態管理的JavaScript庫。
Redux-Saga：用於處理副作用（例如異步操作）的Redux中間件。
TypeScript：用於類型檢查和提供更好的開發工具支持的編程語言。
React Navigation：用於實現導航和路由的庫。

使用的庫和工具
react-native：React Native的核心庫。
react-redux：將Redux與React集成的庫。
react-navigation：用於導航和路由的庫。
axios：用於進行HTTP請求的庫。
react-native-localize：用於本地化應用的庫。

登錄驗證和錯誤處理
在登錄屏幕（LoginScreen.tsx）中，使用表單驗證庫（例如Formik）對登錄字段進行驗證。
在登錄時，發送POST請求到https://api.tokenize-dev.com/mobile-api/auth/login，並將請求體（payload）作為JSON發送。
使用Redux和Redux-Saga管理登錄狀態和副作用。
如果登錄失敗，顯示錯誤消息。

本地化
將所有字符串定義在本地化文件（localization.ts）中，以便輕鬆地進行多語言支持。
使用React Native的本地化庫（例如react-native-localize）來選擇合適的本地化內容。

獲取貨幣圖標
使用提供的URL模板https://tokenize-dev.com/assets/images/currency-logos/${coin-name-in-lowercase}.png，將貨幣名稱（小寫）替換為所需的貨幣圖標的文件名。
加載對應的圖標作為應用中的貨幣圖標。
