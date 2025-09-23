// Section Show/Hide
function showSection(sectionId) {
    const sections = ['home','characters','gallery'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if(id === sectionId) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        }
    });
}

// Log Box
const logBox = document.getElementById('log-box');

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
bgMusic.addEventListener('error', () => logError("Audio delmusic.mp4 ไม่เล่น"));
