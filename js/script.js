// Loading Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loadingScreen").classList.add("hide");
    }, 2000);
});

// Custom Cursor
const cursor = document.getElementById("cursor");
let mouseX = 0,
    mouseY = 0;
let cursorX = 0,
    cursorY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover effects
document.querySelectorAll("a, button, .work-item").forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("expand"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("expand"));
});

// Stars Animation
const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Create stars
for (let i = 0; i < 200; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5,
        opacity: Math.random(),
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = -5;
            star.x = Math.random() * canvas.width;
        }

        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
    });

    requestAnimationFrame(animateStars);
}
animateStars();

// Nebula Particles
function createParticles() {
    const container = document.getElementById("particles");
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 8 + "s";
        particle.style.animationDuration = Math.random() * 8 + 4 + "s";
        container.appendChild(particle);
    }
}
createParticles();

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
});

// Back to Top Button
document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth Scrolling for Navigation
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// ********************ハンバーガーメニュー（デバッグ版）********************************************
const drawerButton = document.getElementById("drawerButton");
const drawerMenu = document.querySelector("header nav ul");

// デバッグ: 要素が正しく取得できているか確認
console.log("drawerButton:", drawerButton);
console.log("drawerMenu:", drawerMenu);

function openDrawer() {
    console.log("openDrawer関数が呼ばれました");

    // メニューの表示状態をトグル
    drawerMenu.classList.toggle("open");
    drawerButton.classList.toggle("reDesign");

    // デバッグ: クラスが正しく付与されているか確認
    console.log("menu classes:", drawerMenu.classList);
    console.log("button classes:", drawerButton.classList);
}

// ボタンクリックイベント
if (drawerButton) {
    drawerButton.addEventListener("click", function (e) {
        console.log("ハンバーガーボタンがクリックされました");
        e.preventDefault();
        openDrawer();
    });
} else {
    console.error("drawerButtonが見つかりません");
}

// メニューリンクをクリックしたとき、メニューを閉じる
const menuLinks = document.querySelectorAll("header nav ul li a");
console.log("menuLinks:", menuLinks);

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        console.log("メニューリンクがクリックされました");
        drawerMenu.classList.remove("open");
        drawerButton.classList.remove("reDesign");
    });
});

// ********************ハンバーガーメニュー********************************************
