const bgMusic = document.getElementById("bg-music");
const startBtn = document.getElementById("startBtn");
const muteBtn = document.getElementById("muteBtn");

// เมื่อโหลดเว็บพยายามเล่นอัตโนมัติ
window.addEventListener("load", () => {
  const playPromise = bgMusic.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log("Autoplay success ✅");
        startBtn.style.display = "none";
        muteBtn.style.display = "inline-block";
      })
      .catch(() => {
        console.log("Autoplay blocked ❌ ต้องกดปุ่มเริ่ม");
        startBtn.style.display = "inline-block";
      });
  }
});

// ปุ่ม Start (ถ้า autoplay โดนบล็อก)
startBtn.addEventListener("click", () => {
  bgMusic.play();
  startBtn.style.display = "none";
  muteBtn.style.display = "inline-block";
});

// ปุ่ม Mute / Unmute
muteBtn.addEventListener("click", () => {
  bgMusic.muted = !bgMusic.muted;
  muteBtn.textContent = bgMusic.muted ? "🔈 Unmute" : "🔊 Mute";
});
