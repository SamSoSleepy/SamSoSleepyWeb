document.addEventListener('DOMContentLoaded', (event) => {
    const freeAddonBtn = document.getElementById('freeAddonBtn');
    const boxContainer = document.getElementById('box-container');
    const mainContent = document.getElementById('main-content');
    const musicBtn = document.getElementById('musicBtn');
    const youtubeIframe = document.getElementById('musicPlayer');
    
    // Array of music playlists - easy to add more songs
    const musicPlaylist = [
        {
            id: '7f1RK1m7qvc',
            title: 'Current Song'
        }
        // เพิ่มเพลงใหม่ได้ที่นี่:
        // {
        //     id: 'NEW_VIDEO_ID',
        //     title: 'Song Name'
        // }
    ];

    let currentSongIndex = 0;
    let isMuted = true; // เริ่มต้นด้วยเสียงปิด
    let hasStartedMusic = false; // ตรวจสอบว่าเพลงเริ่มเล่นแล้วหรือยัง

    // Function to start music on first user interaction
    function startMusicOnFirstInteraction() {
        if (!hasStartedMusic) {
            const currentSong = musicPlaylist[currentSongIndex];
            youtubeIframe.src = `https://www.youtube.com/embed/${currentSong.id}?autoplay=1&mute=0&controls=0&loop=1&playlist=${currentSong.id}&rel=0&showinfo=0`;
            musicBtn.textContent = '🔊 ปิดเพลง';
            isMuted = false;
            hasStartedMusic = true;
            
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

    // Music control button functionality (รวมเป็น Other button)
    musicBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (isMuted) {
            // เปิดเสียง
            const currentSong = musicPlaylist[currentSongIndex];
            youtubeIframe.src = `https://www.youtube.com/embed/${currentSong.id}?autoplay=1&mute=0&controls=0&loop=1&playlist=${currentSong.id}&rel=0&showinfo=0`;
            musicBtn.textContent = '🔊 ปิดเพลง';
            isMuted = false;
            hasStartedMusic = true;
        } else {
            // ปิดเสียง
            const currentSong = musicPlaylist[currentSongIndex];
            youtubeIframe.src = `https://www.youtube.com/embed/${currentSong.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${currentSong.id}&rel=0&showinfo=0`;
            musicBtn.textContent = '🔇 เปิดเพลง';
            isMuted = true;
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
        const muteParam = isMuted ? 1 : 0;
        youtubeIframe.src = `https://www.youtube.com/embed/${currentSong.id}?autoplay=1&mute=${muteParam}&controls=0&loop=1&playlist=${currentSong.id}&rel=0&showinfo=0`;
    }

    // เพิ่มฟังก์ชัน changeSong ไว้ในระดับ global เผื่อต้องการใช้
    window.changeSong = changeSong;
});
