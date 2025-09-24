document.addEventListener('DOMContentLoaded', (event) => {
    const freeAddonBtn = document.getElementById('freeAddonBtn');
    const boxContainer = document.getElementById('box-container');
    const mainContent = document.getElementById('main-content');
    const musicBtn = document.getElementById('musicBtn');
    const audioPlayer = document.getElementById('musicPlayer');
    
    // Array of music files - easy to add more songs
    const musicPlaylist = [
        {
            src: 'delmusic1.mp3',
            title: 'Background Music 1'
        }
        // เพิ่มเพลงใหม่ได้ที่นี่:
        // {
        //     src: 'song2.mp3',
        //     title: 'Background Music 2'
        // }
    ];

    let currentSongIndex = 0;
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
        }
    }

    // เพิ่ม event listeners สำหรับการเริ่มเพลงในการสัมผัสครั้งแรก
    document.addEventListener('click', startMusicOnFirstInteraction);
    document.addEventListener('touchstart', startMusicOnFirstInteraction);

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

    // Function to change song (เผื่ออยากเพิ่มปุ่มเปลี่ยนเพลง)
    function changeSong(direction) {
        if (direction === 'next') {
            currentSongIndex = (currentSongIndex + 1) % musicPlaylist.length;
        } else if (direction === 'prev') {
            currentSongIndex = (currentSongIndex - 1 + musicPlaylist.length) % musicPlaylist.length;
        }
        
        const currentSong = musicPlaylist[currentSongIndex];
        audioPlayer.src = currentSong.src;
        
        if (isPlaying) {
            audioPlayer.play();
        }
    }

    // Set volume to comfortable level
    audioPlayer.volume = 0.5;

    // เพิ่มฟังก์ชัน changeSong ไว้ในระดับ global เผื่อต้องการใช้
    window.changeSong = changeSong;
});
