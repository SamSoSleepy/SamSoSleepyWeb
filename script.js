// Function to write log messages
function logError(message) {
    const logBox = document.getElementById('log-box');
    const time = new Date().toLocaleTimeString();
    const newLog = document.createElement('div');
    newLog.textContent = `[${time}] ${message}`;
    logBox.appendChild(newLog);
    logBox.scrollTop = logBox.scrollHeight;
}

// Check if video loaded
const bgVideo = document.getElementById('bg-video');
bgVideo.addEventListener('error', () => {
    logError("Video del.mp4 ไม่โหลด");
});

// Check if audio loaded
const bgMusic = document.getElementById('bg-music');
bgMusic.addEventListener('error', () => {
    logError("Audio delmusic.mp4 ไม่เล่น");
});
