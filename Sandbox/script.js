// 🌙 ダークモードの切り替え
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// 🔔 ボタンクリックでアラートを表示
function showMessage() {
    alert("こんにちは！GitHub Pages で公開しました！");
}

// ⏰ 現在の日時を更新
function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById("datetime");
    datetimeElement.textContent = now.toLocaleString("ja-JP");
}

// 🎯 おみくじ機能
function drawFortune() {
    const fortunes = ["大吉 🎉", "中吉 😊", "小吉 😌", "吉 🙂", "凶 😨", "大凶 😱"];
    const result = fortunes[Math.floor(Math.random() * fortunes.length)];
    document.getElementById("fortune-result").textContent = `結果: ${result}`;
}

// ⏰ ページが読み込まれたら日時を更新
window.onload = function() {
    updateDateTime();
    setInterval(updateDateTime, 1000); // 1秒ごとに更新
};
