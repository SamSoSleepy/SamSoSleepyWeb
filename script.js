const logBox = document.getElementById('log-box');

// แสดง log
function showLog() {
    if (logBox) logBox.style.display = 'block';
}

// ซ่อน log
function hideLog() {
    if (logBox) logBox.style.display = 'none';
}

// Function เพิ่มข้อความ log
function logError(message) {
    if (!logBox) return;
    const time = new Date().toLocaleTimeString();
    const newLog = document.createElement('div');
    newLog.textContent = `[${time}] ${message}`;
    logBox.appendChild(newLog);
    logBox.scrollTop = logBox.scrollHeight;
}

// ตรวจสอบ Video และ Audio
const bgVideo = document.getElementById('bg-video');
bgVideo.addEventListener('error', () => logError("Video del.mp4 ไม่โหลด"));

const bgMusic = document.getElementById('bg-music');
bgMusic.addEventListener('error', () => logError("Audio delmusic.mp3 ไม่เล่น"));
