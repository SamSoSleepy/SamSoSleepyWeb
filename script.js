document.addEventListener('DOMContentLoaded', (event) => {
    const freeAddonBtn = document.getElementById('freeAddonBtn');
    const boxContainer = document.getElementById('box-container');
    const mainContent = document.getElementById('main-content');
    const musicBtn = document.getElementById('musicBtn');
    const audioPlayer = document.getElementById('musicPlayer');
    
    let isPlaying = false; // ตรวจสอบว่าเพลงเล่นอยู่หรือไม่
    let hasStartedMusic = false; // ตรวจสอบว่าเพลงเริ่มเล่นแล้วหรือยัง

    // Try to start music automatically when page loads (muted first)
    function tryAutoplayMusic() {
        // Start muted to comply with browser autoplay policies
        audioPlayer.muted = true;
        audioPlayer.play().then(() => {
            console.log('Music started automatically (muted)');
            hasStartedMusic = true;
            // Show that music is playing but muted
            musicBtn.textContent = '🔇 เปิดเสียง';
        }).catch(e => {
            console.log('Auto-play prevented by browser:', e);
            // Fallback to original behavior
            musicBtn.textContent = '🔇 เปิดเพลง';
        });
    }

    // Try to start music immediately
    tryAutoplayMusic();

    // Function to unmute and start music on first user interaction
    function startMusicOnFirstInteraction() {
        if (!hasStartedMusic) {
            // If autoplay worked but was muted, just unmute
            audioPlayer.muted = false;
            audioPlayer.play().then(() => {
                musicBtn.textContent = '🔊 ปิดเพลง';
                isPlaying = true;
                hasStartedMusic = true;
                // ลบ event listeners หลังจากเริ่มเล่นสำเร็จแล้วเท่านั้น
                removeStartupListeners();
            }).catch(e => {
                console.log('Auto-play prevented:', e);
                // ไม่ลบ listeners เมื่อเล่นไม่สำเร็จ เพื่อให้ผู้ใช้ลองใหม่ได้
            });
        } else if (audioPlayer.muted) {
            // If music is already playing but muted, just unmute
            audioPlayer.muted = false;
            musicBtn.textContent = '🔊 ปิดเพลง';
            isPlaying = true;
            removeStartupListeners();
        }
    }

    // Function to remove startup event listeners
    function removeStartupListeners() {
        document.removeEventListener('click', startMusicOnFirstInteraction);
        document.removeEventListener('touchstart', startMusicOnFirstInteraction);
        document.removeEventListener('touchend', startMusicOnFirstInteraction);
        document.removeEventListener('keydown', startMusicOnFirstInteraction);
        document.body.removeEventListener('touchstart', startMusicOnFirstInteraction);
        document.body.removeEventListener('touchend', startMusicOnFirstInteraction);
    }

    // เพิ่ม event listeners สำหรับการเริ่มเพลงในการสัมผัสครั้งแรก
    document.addEventListener('click', startMusicOnFirstInteraction);
    document.addEventListener('touchstart', startMusicOnFirstInteraction);
    document.addEventListener('touchend', startMusicOnFirstInteraction);
    document.addEventListener('keydown', startMusicOnFirstInteraction);
    
    // เพิ่ม event listener สำหรับการสัมผัสที่หน้าจอโดยตรง
    document.body.addEventListener('touchstart', startMusicOnFirstInteraction, { passive: true });
    document.body.addEventListener('touchend', startMusicOnFirstInteraction, { passive: true });

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
        
        if (audioPlayer.muted && hasStartedMusic) {
            // ถ้าเพลงเล่นอยู่แต่ปิดเสียง ให้เปิดเสียง
            audioPlayer.muted = false;
            musicBtn.textContent = '🔊 ปิดเพลง';
            isPlaying = true;
        } else if (isPlaying) {
            // ปิดเพลง
            audioPlayer.pause();
            musicBtn.textContent = '🔇 เปิดเพลง';
            isPlaying = false;
        } else {
            // เปิดเพลง
            audioPlayer.muted = false;
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
