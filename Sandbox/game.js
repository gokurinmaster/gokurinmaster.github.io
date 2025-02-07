let score = 0;
let timeLeft = 30;
let timer;
let moleInterval;
let activeMole = -1;

// 🎮 ゲーム開始
function startGame() {
    score = 0;
    timeLeft = 30;
    document.getElementById("score").textContent = score;
    document.getElementById("time").textContent = timeLeft;

    clearInterval(timer);
    clearInterval(moleInterval);

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            clearInterval(moleInterval);
            alert(`ゲーム終了！スコア: ${score}`);
        }
    }, 1000);

    moleInterval = setInterval(showMole, 800);
}

// 🕳 モグラをランダムに表示
function showMole() {
    const moles = document.querySelectorAll(".mole");

    // 前のモグラを隠す
    if (activeMole !== -1) {
        moles[activeMole].classList.remove("show");
    }

    // 新しいモグラをランダムに出現
    activeMole = Math.floor(Math.random() * moles.length);
    moles[activeMole].classList.add("show");
}

// 🔨 モグラを叩いたときの処理
document.querySelectorAll(".hole").forEach((hole, index) => {
    hole.addEventListener("click", () => {
        if (index === activeMole) {
            score++;
            document.getElementById("score").textContent = score;
            document.querySelectorAll(".mole")[activeMole].classList.remove("show");
            activeMole = -1;
        }
    });
});
