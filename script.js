document.addEventListener('DOMContentLoaded', (event) => {
    const freeAddonBtn = document.getElementById('freeAddonBtn');
    const boxContainer = document.getElementById('box-container');
    const mainContent = document.getElementById('main-content');
    const musicBtn = document.getElementById('musicBtn');
    const audioPlayer = document.getElementById('musicPlayer');
    
    let isPlaying = false; // ตรวจสอบว่าเพลงเล่นอยู่หรือไม่
    let hasStartedMusic = false; // ตรวจสอบว่าเพลงเริ่มเล่นแล้วหรือยัง

    // Function to start music on first user interaction
    function startMusicOnFirstInteraction() {
        if (!hasStartedMusic) {
            audioPlayer.play().then(() => {
                musicBtn.textContent = '🔊 ปิดเพลง';
                isPlaying = true;
                hasStartedMusic = true;
            }).catch(e => {
                console.log('Auto-play prevented:', e);
            });
            
            // ลบ event listeners หลังจากเริ่มเล่นแล้ว
            document.removeEventListener('click', startMusicOnFirstInteraction);
            document.removeEventListener('touchstart', startMusicOnFirstInteraction);
            document.removeEventListener('keydown', startMusicOnFirstInteraction);
        }
    }

    // เพิ่ม event listeners สำหรับการเริ่มเพลงในการสัมผัสครั้งแรก
    document.addEventListener('click', startMusicOnFirstInteraction);
    document.addEventListener('touchstart', startMusicOnFirstInteraction);
    document.addEventListener('keydown', startMusicOnFirstInteraction);

    // Free Addon button functionality
    freeAddonBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (boxContainer.classList.contains('hidden')) {
            boxContainer.classList.remove('hidden');
            mainContent.classList.add('hidden');
        } else {
            boxContainer.classList.add('hidden');
            mainContent.classList.remove('hidden');
        }
    });

    // Music control button functionality
    musicBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (isPlaying) {
            // ปิดเพลง
            audioPlayer.pause();
            musicBtn.textContent = '🔇 เปิดเพลง';
            isPlaying = false;
        } else {
            // เปิดเพลง
            audioPlayer.play().then(() => {
                musicBtn.textContent = '🔊 ปิดเพลง';
                isPlaying = true;
                hasStartedMusic = true;
            }).catch(e => {
                console.log('Play prevented:', e);
            });
        }
    });

    // Set volume to comfortable level
    audioPlayer.volume = 0.5;
});
