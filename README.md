# 終極倒數 · Terminal Countdown

[開啟工具](https://wcy.hk/Terminal-Countdown/)

日系動漫任務風格的課堂與活動計時器。開始、暫停、繼續、扣除 30 秒及重設；1／3／5／10 分鐘與自訂 0.05–180 分鐘。保留能量核心、生態警報及星核倒數三種主題。音效預設關閉，由使用者主動開啟。

按單一 monotonic deadline 計算，不以 setInterval 呼叫次數扣秒。背景分頁回來仍依實際時間更新；到時立即停止，沒有延遲自動重設覆蓋新任務。重設返回已選時限；重新整理開始新任務。

純靜態 GitHub Pages，無後端。測試：`node --test timer.test.mjs`。插圖為 WCY.HK 原創專案海報。
