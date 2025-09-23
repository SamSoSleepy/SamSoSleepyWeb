document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('videoBackground');
    const image = document.getElementById('imageBackground');

    // ตรวจจับเมื่อวิดีโอมีปัญหาในการโหลด (เช่น ไฟล์ไม่พบ หรือไม่รองรับ)
    video.addEventListener('error', () => {
        // ซ่อนวิดีโอแล้วแสดงรูปภาพแทน
        video.style.display = 'none';
        image.style.display = 'block';
    });

    // เริ่มเล่นวิดีโออีกครั้งเผื่อมีปัญหาในการเล่นครั้งแรก
    video.play().catch(error => {
        // หากเล่นไม่ได้ ให้เปลี่ยนไปใช้รูปภาพทันที
        video.style.display = 'none';
        image.style.display = 'block';
    });
});

// ฟังก์ชันสำหรับเล่นเพลงเมื่อกดปุ่ม
function playMusic() {
    const audio = document.getElementById('audioBackground');
    audio.play();
}
