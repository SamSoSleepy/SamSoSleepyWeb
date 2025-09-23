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

    // แสดง logBox ถ้าเป็น Other
    if(sectionId === 'gallery') {
        const logBox = document.getElementById('log-box');
        if(logBox) logBox.style.display = 'block';
    } else {
        const logBox = document.getElementById('log-box');
        if(logBox) logBox.style.display = 'none';
    }
}

// Function เพิ่มข้อความ log
function logError(message) {
    const logBox = document.getElementById('log-box'); // เลือกใหม่ทุกครั้ง
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
