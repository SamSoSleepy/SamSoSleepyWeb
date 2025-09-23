const bgMusic = document.getElementById("bg-music");
const muteBtn = document.getElementById("muteBtn");

// ฟังก์ชันเริ่มเล่นเพลงอัตโนมัติ
function startMusic() {
  bgMusic.volume = 1.0;
  const playPromise = bgMusic.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log("Music autoplay success ✅");
      })
      .catch(() => {
        console.log("Autoplay blocked ❌, trying silent-unmute hack...");
        // ถ้าโดนบล็อก → เล่นแบบเงียบก่อนแล้วค่อยเปิดเสียง
        bgMusic.volume = 0;
        bgMusic.play().then(() => {
          setTimeout(() => {
            bgMusic.volume = 1.0;
          }, 1000);
        });
      });
  }
}

// เริ่มเพลงเมื่อโหลดเว็บ
window.addEventListener("load", startMusic);

// ปุ่ม Mute / Unmute
muteBtn.addEventListener("click", () => {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    muteBtn.textContent = "🔊 Mute";
  } else {
    bgMusic.muted = true;
    muteBtn.textContent = "🔈 Unmute";
  }
});
