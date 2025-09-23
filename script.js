// จัดการปุ่มเล่นเพลง
const playBtn = document.getElementById("playMusicBtn");
const bgMusic = document.getElementById("bg-music");

playBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    playBtn.textContent = "⏸ Pause Music";
  } else {
    bgMusic.pause();
    playBtn.textContent = "▶ Play Music";
  }
});
