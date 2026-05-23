// 1. 設定倒數的分鐘數 (例如：5分鐘)
const countdownMinutes = 5;

// 2. 計算目標結束的時間點 (現在時間 + 5分鐘)
const deadline = new Date().getTime() + countdownMinutes * 60 * 1000;

// 3. 啟動計時器，每 1000 毫秒 (1秒) 執行一次
const timerInterval = setInterval(function() {
  const now = new Date().getTime();
  const distance = deadline - now;

  // 計算分與秒
  const minutes = Math.floor(distance / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // 將結果顯示在網頁上 (使用 padStart 確保數值保持兩位數)
  document.getElementById("timer").innerHTML = 
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // 4. 當時間結束時停止計時器
  if (distance < 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "時間到！";
  }
}, 1000);