// ********************ページ遷移フェードアウト********************************************
document.addEventListener("DOMContentLoaded", () => {
    const fadeLinks = document.querySelectorAll("#sec02 .images a");

    fadeLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const url = this.href;

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = url;
            }, 500); // CSSのアニメーション時間と揃える
        });
    });
});
// ********************ページ遷移フェードアウト********************************************

// ===================== 星空Canvas =====================
const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        dx: Math.random() * 0.2 - 0.1,
        dy: Math.random() * 0.2 - 0.1,
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        star.x += star.dx;
        star.y += star.dy;

        // 画面端で跳ね返る
        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
    });

    requestAnimationFrame(drawStars);
}

drawStars();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ===================== マウスエフェクト =====================*************************
const cursor = document.getElementById("cursor");
const follower = document.getElementById("cursor-follower");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.transform = `translate(${x}px, ${y}px)`;
    follower.style.transform = `translate(${x}px, ${y}px)`;
});

// 追加：特定要素にhover時の効果をつけたい場合
document.querySelectorAll("a, button, .swiper-slide").forEach((el) => {
    el.classList.add("hover-effect");
});
// ===================== マウスエフェクト =====================*************************
